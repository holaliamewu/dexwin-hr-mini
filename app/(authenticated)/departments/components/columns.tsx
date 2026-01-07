"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { ColumnDef } from "@tanstack/react-table"
import clsx from "clsx";
import { Ellipsis, Pencil, Trash } from "lucide-react";

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
    header: "Department Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className={clsx(
        "flex items-center w-fit gap-2 px-3 py-2 rounded-lg text-sm font-medium border ",
        row.original.status === "Active" ? "text-stone-800 font-semibold border-[#02AA69]/10" : "bg-gray-50 text-gray-300 semibold border-gray-100 "
      )}>
        <span className={clsx("flex w-2.5 h-2.5 rounded-full ", row.original.status === "Active" ? "bg-[#12B76A] " : "bg-gray-300")} /> {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({row}) => (
      <Popover >
        <PopoverTrigger asChild>
        <button className="" ><Ellipsis size={20} color="#09090b" className="ml-2" /></button>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="end" className="p-0 border-0 outline-none " >
          <div className="flex flex-col bg-white shadow-md rounded-md border w-40 p-1  " >
            <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-[#02aa69]/10 rounded-sm outline-none font-semibold " ><Pencil size={18} /> Edit</button>
            <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-red-100 rounded-sm font-semibold text-red-400 " ><Trash size={18} /> Delete</button>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
]