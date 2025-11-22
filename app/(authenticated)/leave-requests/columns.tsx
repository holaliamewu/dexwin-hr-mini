"use client"

import { ColumnDef } from "@tanstack/react-table"

export type LeaveRequest = {
    id: number;
    dateSubmitted: string;
    description: string;
    status: "approved" | "pending approval" | "action required";
  }

export const columns: ColumnDef<LeaveRequest>[] = [
  {
    accessorKey: "dateSubmitted",
    header: "Date Submitted",
  },
  {
    accessorKey: "description",
    header: "What it mean",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]