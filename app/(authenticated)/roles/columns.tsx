"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Department = {
    id: number;
    name: string;
    dateCreated: string;
    description: string;
    status: "Active" | "Inactive";
  }

export const columns: ColumnDef<Department>[] = [
  {
    accessorKey: "dateCreated",
    header: "Date Created",
  },
  {
    accessorKey: "name",
    header: "Role Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
]