"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, Attendance } from "./columns";
import { DataTable } from "./data-table";
import { Funnel, Search } from "lucide-react";
import {  DropdownMenu, 
          DropdownMenuContent, 
          DropdownMenuItem, 
          DropdownMenuPortal, 
          DropdownMenuSub, 
          DropdownMenuSubContent, 
          DropdownMenuSubTrigger, 
          DropdownMenuTrigger 
        } from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { time } from "console";


export default function AttendancePage() {

  const attendanceData: Attendance[] = [
    {
      id: 1,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
    {
      id: 2,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
    {
      id: 3,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
    {
      id: 4,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
    {
      id: 5,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
    {
      id: 6,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
    {
      id: 7,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
    {
      id: 8,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
    {
      id: 9,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
    {
      id: 10,
      timeStamp: "26/10/25 12:41",
      clockIn: "10:02 AM",
      clockOut: "5:00 PM",
    },
  ]

  const timeQuarterIntervals: { time: string; selected: boolean }[] =
    Array.from({ length: 24 * 4 }).map((_, i) => {
      const hour = Math.floor(i / 4);
      const minute = (i % 4) * 15;
      return {
        time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(
          2,
          "0"
        )}`,
        selected: false,
      };
    });

  const [ date, setDate ] = useState<Date | undefined>(new Date())

  function AttendanceCalendar() {
    return(
      <div className="flex flex-col w-fit h-110 p-4" >
        <div className="flex justify-between " >
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md w-[342px] "
            captionLayout="dropdown"
          />
          <section className="flex flex-col h-85 mt-5 ml-5 pl-5 gap-2 overflow-y-scroll border-l " >
            {
              timeQuarterIntervals.map((interval) => (
                <div key={interval.time} className="flex items-center">
                 <Button variant={interval.selected ? "default" : "outline"} className="m-1 w-30 h-10 text-sm " >{interval.time}</Button> 
                </div>
              ))
            }
          </section>
        </div>
        <div className="flex items-center justify-between border-t px-4 py-4  " >
          <p className="font-[400] text-sm" >Your meeting is booked for <span className="font-semibold" >Thursday, May 9 </span> at <span className="font-semibold" >10:00.</span></p>
          <Button variant="outline" className="" >Continue</Button>
        </div>
      </div>
    )
  }

    return(
    <section className="mt-8" >
      <div className="flex items-center justify-between gap-3" >
        <span className="flex items-center gap-3" >
          <span className="flex items-center justify-center w-10 h-10 aspect-square border border-stone-300 rounded-full " >
            <Image src="/icons/user-plus.svg" alt="icon" width={24} height={24} className="w-[24px] " />
          </span>               
          <span className="" >
            <h3 className="text-[20px] font-bold " >Attendance</h3>
            <p className="text-[13px] " >Check all your attendance on the HR Mini</p>
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
                            <DropdownMenuItem className="text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Timestamps</DropdownMenuItem>
                            <DropdownMenuSub >
                              <DropdownMenuSubTrigger >
                                <button className="w-full text-sm text-left text-black cursor-pointer px-4 py-2 hover:bg-[#02aa69]/10 " >Clock In and Out</button>
                              </DropdownMenuSubTrigger>
                              <DropdownMenuPortal >
                                <DropdownMenuSubContent className="flex flex-col w-fit ">
                                  <AttendanceCalendar />
                                </DropdownMenuSubContent>
                              </DropdownMenuPortal>
                          </DropdownMenuSub>
                        </div>
                    </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </div>
        </div>
      <DataTable columns={columns} data={attendanceData} />
    </section>
  )}