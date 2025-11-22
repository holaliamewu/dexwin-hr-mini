"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Attendance = {
    id: number;
    timeStamp: string;
    clockInOut: string;
  }

export const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "timeStamp",
    header: "Timestamps",
  },
  {
    accessorKey: "clockInOut",
    header: "Clock-In & Out",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
]