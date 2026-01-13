"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, Department } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Funnel, Plus, RefreshCcw, Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import CreateDepartmentModal from "./components/create-department-modal";
import EditDepartmentModal from "./components/edit-department-modal";
import DeleteDepartmentModal from "./components/delete-department-modal";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";


export type TModalProps = {
  open: boolean
  onClose: ( open: boolean ) => void
}

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


  const [openCreateDepartmentModal, setOpenCreateDepartmentModal] = useState(false);
  const [openEditDepartmentModal, setOpenEditDepartmentModal] = useState(false);
  const [openDeleteDepartmentModal, setOpenDeleteDepartmentModal] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());


  const onCloseCreateDepartmentModal = () => {
    setOpenCreateDepartmentModal(false);
  };

  const onCloseEditDepartmentModal = () => {
    setOpenEditDepartmentModal(false);
  };

  const onCloseDeleteDepartmentModal = () => {
    setOpenDeleteDepartmentModal(false);
  };

  function DepartmentEmptyState() {
      return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-300px)] gap-4 mt-16 " >
          <Image src="/icons/layers.svg" alt="icon" width={24} height={24} className="w-[36px] bg-[#02AA69]/20 p-2 rounded-[4px] " />
          <h3 className="text-[18px] font-semibold " >No Departments yet</h3>
          <p className="text-center text-sm text-[#02AA69] text-stone-500 max-w-md " >Looks like there are no departments created on HR mini. 
            Click the “Refresh” button to reload the page  or  click the “Create Department” button to create a department.</p>
          <span className="flex gap-4" >
            <Button className="min-w-[175px] py-[7.5px] mt-4 px-6 py-2.5 text-sm bg-[#02AA69] " ><Plus className="flex items-center justify-center border border-white rounded-full p-[2px] " /> Create Department</Button>
            <Button className="min-w-[175px] py-[7.5px] mt-4 px-6 py-2.5 text-sm " ><RefreshCcw /> Refresh</Button>
          </span>
        </div>
      )}

      function NoDepartmentFound() {
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
            <Image src="/icons/layers.svg" alt="icon" width={24} height={24} className="w-[24px] " />
          </span>
          <span className="" >
            <h3 className="text-[20px] font-bold " >Department</h3>
            <p className="text-[13px] " >View the list of departments for the HR Mini</p>
          </span>
        </span>
        <Button variant="outline" className="text-[13px] border-black" ><Image src="/icons/arrow-semi-circle.svg" alt="Export icon" width={16} height={16} /> Export CSV</Button>
      </div>
      {departmentData.length < 1 ? 
        <DepartmentEmptyState /> : 
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
                            <DropdownMenuItem className="text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Department Name</DropdownMenuItem>
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
                        </div>
                    </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
            <Button variant="default" onClick={() => setOpenCreateDepartmentModal(true)} className="min-w-[175px] py-[7.5px] px-6 py-2.5 text-sm bg-[#02AA69] " ><Plus className="flex items-center justify-center border border-white rounded-full p-[2px] " /> Create Department</Button>
          </div>
          <DataTable columns={columns} data={departmentData} />
          {/* <NoDepartmentFound /> */}
        </div>}
          { openCreateDepartmentModal && <CreateDepartmentModal open={openCreateDepartmentModal} onClose={onCloseCreateDepartmentModal} /> }
          { openEditDepartmentModal && <EditDepartmentModal open={openEditDepartmentModal} onClose={onCloseEditDepartmentModal} /> }
          { openDeleteDepartmentModal && <DeleteDepartmentModal open={openDeleteDepartmentModal} onClose={onCloseDeleteDepartmentModal} /> }
    </section>
  )}




  