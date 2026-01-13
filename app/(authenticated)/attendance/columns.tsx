"use client"

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";

export type Attendance = {
    id: number;
    timeStamp: string;
    clockIn: string;
    clockOut: string;
  }

export const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "timeStamp",
    header: "Timestamps",
  },
  {
    accessorKey: "clockInOut",
    header: "Clock-In & Out",
    cell: ({ row }) => {
      const { clockIn, clockOut } = row.original;
      return <span className="flex items-center w-full ">{clockIn}{" "} <Image src="/icons/dot-dash.svg" alt="Dot dash icon" width={24} height={16} /><span className="text-xs mx-2" > 8h:25m </span> <Image src="/icons/dot-dash.svg" alt="Dot dash icon" width={16} height={16} className="rotate-180 w-6" /> {clockOut}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return (
        <div className="flex items-center w-full gap-4">
          <Button variant="outline" size="sm">
            Clock In
          </Button>
          <Button variant="outline" size="sm">
            Clock Out
          </Button>
        </div>
      );
    },
  },
]