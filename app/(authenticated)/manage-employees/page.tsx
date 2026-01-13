"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, TManageEmployees } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Funnel, Plus, RefreshCcw, Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import AddEmployeeModal from "./components/add-employee-modal";
import EditEmployeeModal from "./components/edit-employee-modal";
import DeleteEmployeeModal from "./components/delete-employee-modal";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";


export type TModalProps = {
  open: boolean
  onClose: ( open: boolean ) => void
}

export default function ManageEmployeesPage() {

  const employeesData: TManageEmployees[] = [
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


  const [openAddEmployeesModal, setOpenAddEmployeesModal] = useState(false);
  const [openEditEmployeesModal, setOpenEditEmployeesModal] = useState(false);
  const [openDeleteEmployeesModal, setOpenDeleteEmployeesModal] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const onCloseAddEmployeesModal = () => {
    setOpenAddEmployeesModal(false);
  };

  const onCloseEditEmployeesModal = () => {
    setOpenEditEmployeesModal(false);
  };

  const onCloseDeleteEmployeesModal = () => {
    setOpenDeleteEmployeesModal(false);
  };

  function ManageEmployeesEmptyState() {
      return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-300px)] gap-4 mt-16 " >
          <Image src="/icons/layers.svg" alt="icon" width={24} height={24} className="w-[36px] bg-[#02AA69]/20 p-2 rounded-[4px] " />
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
          <Image src="/icons/empty-folder.svg" alt="icon" width={36} height={36} className=" p-2 rounded-[4px] " />
          <h3 className="text-[18px] font-semibold " >No Results Found</h3>
          <p className="text-center text-sm text-[#02AA69] text-stone-500 max-w-md " >Looks like there are no departments created on HR mini. Click the “Refresh” button to reload the page  or  click the “Clear filter” button to try again.</p>
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
            <Image src="/icons/user-group.svg" alt="icon" width={24} height={24} className="w-[24px] " />
          </span>
          <span className="" >
            <h3 className="text-[20px] font-bold " >Manage Employees</h3>
            <p className="text-[13px] " >Manage your employees on the HR Mini</p>
          </span>
        </span>
        {/* <Button variant="outline" className="text-[13px]" ><Image src="/icons/arrow-semi-circle.svg" alt="Export icon" width={16} height={16} /> Export CSV</Button> */}
      </div>
      {employeesData.length < 1 ? 
        <ManageEmployeesEmptyState /> : 
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
                            <DropdownMenuItem className="text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Name</DropdownMenuItem>
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
                          <DropdownMenuSub >
                            <DropdownMenuSubTrigger >
                              <button className="w-full text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Date created</button>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal >
                              <DropdownMenuSubContent className="flex flex-col w-fit ">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  className="rounded-md"
                                  captionLayout="dropdown"
                                />
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                          <DropdownMenuItem className="text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Role</DropdownMenuItem>

                        </div>
                    </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
            <Button variant="default" onClick={() => setOpenAddEmployeesModal(true)} className="min-w-[175px] py-[7.5px] px-6 py-2.5 text-sm bg-[#02AA69] " ><Plus className="flex items-center justify-center " /> Add Employee</Button>
          </div>
          <DataTable columns={columns} data={employeesData} />
          {/* <NoEmployeesFound /> */}
        </div>}
          { openAddEmployeesModal && <AddEmployeeModal open={openAddEmployeesModal} onClose={onCloseAddEmployeesModal} /> }
          { openEditEmployeesModal && <EditEmployeeModal open={openEditEmployeesModal} onClose={onCloseEditEmployeesModal} /> }
          { openDeleteEmployeesModal && <DeleteEmployeeModal open={openDeleteEmployeesModal} onClose={onCloseDeleteEmployeesModal} /> }
    </section>
  )}




  