import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, Department } from "./columns";
import { DataTable } from "./data-table";


export default function Departments() {

  const departmentData: Department[] = [
    {
      id: 1,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Active",
    },
    {
      id: 2,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Active",
    },
    {
      id: 4,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Active",
    },
    {
      id: 5,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Active",
    },
    {
      id: 6,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Active",
    },
    {
      id: 7,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Active",
    },
    {
      id: 8,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Active",
    },
    {
      id: 9,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Active",
    },
    {
      id: 10,
      name: "Operational",
      dateCreated: "26/10/25 | 12:41 AM",
      description: "Brand Awareness Growth",
      status: "Active",
    },
  ]
    
    return(
    <section className="mt-8" >
      <div className="flex items-center justify-between gap-3" >
        <span className="flex items-center gap-3" >
          <span className="flex items-center justify-center w-10 h-10 aspect-square border border-stone-300 rounded-full " >
            <Image src="/icons/layers.svg" alt="icon" width={24} height={24} className="w-[24px] " />
          </span>
          <span className="" >
            <h3 className="text-[20px] font-bold " >Roles</h3>
            <p className="text-[13px] " >View the list of departments for the HR Mini</p>
          </span>
        </span>
        <Button variant="outline" className="text-[13px]" ><Image src="/icons/arrow-semi-circle.svg" alt="Export icon" width={16} height={16} /> Export CSV</Button>
      </div>
      <DataTable columns={columns} data={departmentData} />
    </section>
  )}