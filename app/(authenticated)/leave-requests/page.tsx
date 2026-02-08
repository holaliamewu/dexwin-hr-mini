"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, LeaveRequest } from "./columns";
import { DataTable } from "./data-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Funnel, Plus, Search } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";


export default function LeaveRequestsPage() {

  const leaveRequestData: LeaveRequest[] = [
    {
      id: 1,
      dateSubmitted: "26/10/25 | 12:41 AM",
      description: "Your request has been successfully submitted and is awaiting review by your manager",
      status: "Pending Approval",
    },
    {
      id: 2,
      dateSubmitted: "26/10/25 | 12:41 AM",
      description: "Your manager need clarification or an updated document (e.g., a doctor's note) before they can approve the request.",
      status: "Action Required",
    },
  ]

  const [ date, setDate] = useState< Date | undefined >(new Date());
    
    return(
    <section className="mt-8" >
      <div className="flex items-center justify-between gap-3" >
        <span className="flex items-center gap-3" >
          <span className="flex items-center justify-center w-10 h-10 aspect-square border border-stone-300 rounded-full " >
            <Image src="/icons/receive-arrow.svg" alt="icon" width={24} height={24} className="w-[24px] " />
          </span>
          <span className="" >
            <h3 className="text-[20px] font-bold " >Leave Requests</h3>
            <p className="text-[13px] " >Submit your leave requests on the HR Mini</p>
          </span>
        </span>
      </div>
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
            <Button variant="default" className="min-w-[175px] py-[7.5px] px-6 py-2.5 text-sm bg-[#02AA69] " >Submit Leave</Button>
          </div>
        </div>
      <DataTable columns={columns} data={leaveRequestData} />
    </section>
  )}