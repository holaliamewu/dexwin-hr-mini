"use client"

import { ColumnDef } from "@tanstack/react-table"
import clsx from "clsx";

export type TEmployeeList = {
    id: number;
    name: string;
    email: string;
    department: string;
    role: string;
    status: "Active" | "Inactive";
  }

export const columns: ColumnDef<TEmployeeList>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className={clsx(
        "flex items-center w-fit gap-2 px-3 py-2 rounded-lg text-sm font-medium border ",
        row.original.status === "Active" ? "text-stone-800 font-semibold border-[#02AA69]/10" : "bg-gray-50 text-gray-300 semibold border-gray-100 "
      )}>
        <span className={clsx("flex w-2.5 h-2.5 rounded-full ", row.original.status === "Active" ? "bg-[#12B76A] " : "bg-gray-300")} /> {row.original.status}
      </div>
    ),
  },
]