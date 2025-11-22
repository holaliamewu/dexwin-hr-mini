import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, Attendance } from "./columns";
import { DataTable } from "./data-table";


export default function AttendancePage() {

  const attendanceData: Attendance[] = [
    {
      id: 1,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
    {
      id: 2,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
    {
      id: 3,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
    {
      id: 4,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
    {
      id: 5,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
    {
      id: 6,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
    {
      id: 7,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
    {
      id: 8,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
    {
      id: 9,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
    {
      id: 10,
      timeStamp: "26/10/25 12:41",
      clockInOut: "10:02 AM -- 5:00 PM",
    },
  ]
    
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
      <DataTable columns={columns} data={attendanceData} />
    </section>
  )}