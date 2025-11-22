import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, EmployeeList } from "./columns";
import { DataTable } from "./data-table";


export default function EmployeesListPage() {

  const employeeListData: EmployeeList[] = [
    {
      id: 1,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Active",
    },
    {
      id: 2,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Active",
    },
    {
      id: 4,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Active",
    },
    {
      id: 5,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Active",
    },
    {
      id: 6,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Active",
    },
    {
      id: 7,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Active",
    },
    {
      id: 8,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Active",
    },
    {
      id: 9,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Active",
    },
    {
      id: 10,
      name: "Luke Smart",
      email: "lukesmart@gmail.com",
      role: "Product Designer",
      department: "Operations",
      status: "Active",
    },
  ]
    
    return(
    <section className="mt-8" >
      <div className="flex items-center justify-between gap-3" >
        <span className="flex items-center gap-3" >
          <span className="flex items-center justify-center w-10 h-10 aspect-square border border-stone-300 rounded-full " >
            <Image src="/icons/user-circle.svg" alt="icon" width={24} height={24} className="w-[24px] " />
          </span>
          <span className="" >
            <h3 className="text-[20px] font-bold " >Employees list</h3>
            <p className="text-[13px] " >View the list of employees on the HR Mini</p>
          </span>
        </span>
        <Button variant="outline" className="text-[13px]" ><Image src="/icons/arrow-semi-circle.svg" alt="Export icon" width={16} height={16} /> Export CSV</Button>
      </div>
      <DataTable columns={columns} data={employeeListData} />
    </section>
  )}