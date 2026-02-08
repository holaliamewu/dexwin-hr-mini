"use client"

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table"
import clsx from "clsx";

export type LeaveRequest = {
    id: number;
    dateSubmitted: string;
    description: string;
    status: "Approved" | "Pending Approval" | "Action Required" | "Declined";
  }

export const columns: ColumnDef<LeaveRequest>[] = [
  {
    accessorKey: "dateSubmitted",
    header: "Date Submitted",
  },
  {
    accessorKey: "description",
    header: "What it Means",
  },
  {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span className={clsx(
          "flex items-center w-fit gap-2 px-3 py-2 rounded-lg text-sm font-medium border ",
          row.original.status === "Approved" ? "text-stone-800 font-semibold border-[#02AA69]/10" : "bg-gray-50 text-gray-300 semibold border-gray-100 "
        )}>
          <span className={clsx("flex w-2.5 h-2.5 rounded-full ", row.original.status === "Approved" ? "bg-[#12B76A] " : "bg-gray-300")} /> {row.original.status}
        </span>
      ),
    },
]