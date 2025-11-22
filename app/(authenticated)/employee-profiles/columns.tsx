"use client"

import { ColumnDef } from "@tanstack/react-table"

export type EmployeeProfile = {
    id: number;
    name: string;
    email: string;
    department: string;
    role: string;
    status: "Active" | "Inactive";
  }

export const columns: ColumnDef<EmployeeProfile>[] = [
  {
    accessorKey: "name",
    header: "Department Name",
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