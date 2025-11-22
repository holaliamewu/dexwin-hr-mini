import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, Department } from "./columns";
import { DataTable } from "./data-table";


export default function Departments() {

  const rolesData: Department[] = [
    {
      id: 1,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Active",
    },
    {
      id: 2,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Active",
    },
    {
      id: 4,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Active",
    },
    {
      id: 5,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Active",
    },
    {
      id: 6,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Active",
    },
    {
      id: 7,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Active",
    },
    {
      id: 8,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Active",
    },
    {
      id: 9,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Active",
    },
    {
      id: 10,
      name: "Product Designer",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Creates intuitive product designs.",
      status: "Active",
    },
  ]
    
    return(
    <section className="mt-8" >
      <div className="flex items-center justify-between gap-3" >
        <span className="flex items-center gap-3" >
          <span className="flex items-center justify-center w-10 h-10 aspect-square border border-stone-300 rounded-full " >
            <Image src="/icons/check-square.svg" alt="icon" width={24} height={24} className="w-[24px] " />
          </span>
          <span className="" >
            <h3 className="text-[20px] font-bold " >Roles</h3>
            <p className="text-[13px] " >Manage role titles for the HR Mini</p>
          </span>
        </span>
        <Button variant="outline" className="text-[13px]" ><Image src="/icons/arrow-semi-circle.svg" alt="Export icon" width={16} height={16} /> Export CSV</Button>
      </div>
      <DataTable columns={columns} data={rolesData} />
    </section>
  )}