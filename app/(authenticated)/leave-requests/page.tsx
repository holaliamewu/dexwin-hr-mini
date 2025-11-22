import { Button } from "@/components/ui/button";
import Image from "next/image";
import { columns, LeaveRequest } from "./columns";
import { DataTable } from "./data-table";


export default function LeaveRequestsPage() {

  const leaveRequestData: LeaveRequest[] = [
    {
      id: 1,
      dateSubmitted: "26/10/25 | 12:41 AM",
      description: "Your request has been successfully submitted and is awaiting review by your manager",
      status: "pending approval",
    },
    {
      id: 2,
      dateSubmitted: "26/10/25 | 12:41 AM",
      description: "Your manager need clarification or an updated document (e.g., a doctor's note) before they can approve the request.",
      status: "action required",
    },
  ]
    
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
      <DataTable columns={columns} data={leaveRequestData} />
    </section>
  )}