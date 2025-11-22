"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ManageEmployee = {
    id: number;
    name: string;
    email: string;
    department: string;
    role: string;
    status: "Active" | "Inactive";
  }

export const columns: ColumnDef<ManageEmployee>[] = [
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
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
]