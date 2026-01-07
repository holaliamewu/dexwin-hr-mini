import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, TEmployeeList } from "./columns";
import { DataTable } from "./data-table";
import { Funnel, Plus, RefreshCcw, Search } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent, DropdownMenuSub } from "@/components/ui/dropdown-menu";


export default function EmployeesListPage() {

  const employeeListData: TEmployeeList[] = [
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

 function EmployeeListEmptyState() {
      return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-300px)] gap-4 mt-16 " >
          <Image src="/icons/user-circle.svg" alt="icon" width={24} height={24} className="w-[36px] bg-[#02AA69]/20 p-2 rounded-[4px] " />
          <h3 className="text-[18px] font-semibold " >No Employees yet</h3>
          <p className="text-center text-sm text-[#02AA69] text-stone-500 max-w-md " >Looks like there are were no employees here on HR mini. Click the “Refresh” button to reload the page  or  click the “Add Employee” button to create a role</p>
          <span className="flex gap-4" >
            <Button className="min-w-[175px] py-[7.5px] mt-4 px-6 py-2.5 text-sm bg-[#02AA69] " ><Plus className="flex items-center justify-center border border-white rounded-full p-[2px] " /> Add Employee</Button>
            <Button className="min-w-[175px] py-[7.5px] mt-4 px-6 py-2.5 text-sm " ><RefreshCcw /> Refresh</Button>
          </span>
        </div>
      )}

  function NoEmployeesFound() {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-500px)] gap-4 mt-16 " >
        <Image src="/icons/empty-folder.svg" alt="icon" width={36} height={36} className="rounded-[4px] " />
        <h3 className="text-[18px] font-semibold " >No results found</h3>
        <p className="text-center text-sm text-[#02AA69] text-stone-500 max-w-md " > We could not find matching results for your search. Click the “Clear filters” button to try again.</p>
        <span className="flex gap-4" >
          <Button className="min-w-[175px] py-[7.5px] mt-4 px-6 py-2.5 text-sm bg-[#02AA69] " ><Search className="flex items-center justify-center " /> Clear Filter</Button>
        </span>
      </div>
    )}
    
  return(
    <section className="mt-8" >
      <div className="flex items-center justify-between mb-[46px]" >
        <span className="flex items-center gap-3 " >
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
      {employeeListData.length < 1 ? 
        <EmployeeListEmptyState /> : 
        <div className="flex flex-col mt-[46px] " >
          <div className="flex items-center justify-between " >
            <span className="flex items-center gap-4 " >
              <span className="flex items-center border min-w-[450px] gap-1 pl-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02AA69] focus:border-transparent" >
                <Search size={18} className="text-stone-400"/>
                <input type="text" placeholder="Type or Search" className="w-full max-w-sm h-10 text-sm outline-none" />
              </span>
              <DropdownMenu >
                <DropdownMenuTrigger >
                <Button variant="outline" className="bg-red-" ><Funnel /> Filter by</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="outline-none shadow-xl rounded-lg z-1000 w-[238px] " >
                    <div className="flex flex-col w-full bg-white rounded-lg bg-teal-500 " >
                        <h6 className="px-3 py-2 text-stone-500 text-[12px] " >Filter by</h6>
                        <div className="flex flex-col items-left p-[1px] " >
                            <DropdownMenuItem className="text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Department</DropdownMenuItem>
                            <DropdownMenuItem className="text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Role</DropdownMenuItem>
                              <DropdownMenuSub >
                                <DropdownMenuSubTrigger >
                                  <button className="w-full text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Status</button>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal >
                                  <DropdownMenuSubContent className="flex flex-col w-[238px] ">
                                    <button className="text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Active</button>
                                    <button className="text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 rounded-b-lg " >Inactive</button>
                                  </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        </div>
                    </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </div>
        <DataTable columns={columns} data={employeeListData} />
        {/* <NoEmployeesFound /> */}
        </div>}
    </section>
  )}