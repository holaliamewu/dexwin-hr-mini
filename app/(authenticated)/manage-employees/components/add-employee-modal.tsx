"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, Plus, X } from "lucide-react";
import { useState } from "react";
import { TModalProps } from "../page";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";

export default function AddEmployeeModal({open, onClose}:TModalProps) {

    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [employeeStatus, setEmployeeStatus] = useState<"Active" | "Inactive">("Inactive");

    return(
        <section className="flex flex-col items-center justify-center absolute w-screen h-full top-0 left-0 bg-black/70 z-100" >
            <div className="relative min-w-[720px] h-fit bg-white p-12 rounded-xl" >
                <span className="flex items-center gap-3" >
                    <Image src="/icons/user-group.svg" alt="Employees Icon" width={38} height={38} className="border rounded-full p-1 " />
                    <span className="" >
                        <h1 className="text-[20px] font-bold" >Add Employee</h1>
                        <p className="text-[14px] text-[#71717a]  " >Add your employees on the HR Mini</p>
                    </span>
                </span>
                <form className="flex flex-col gap-6 mt-6">
                    <div className="flex w-full gap-11" >
                        <span className="flex flex-col w-full gap-2" >
                            <label className="text-[14px] font-semibold" >Name</label>
                            <Input placeholder="Full name" className=""  />
                        </span>
                        <span className="flex flex-col w-full gap-2" >
                            <label className="text-[14px] font-semibold" >Email</label>
                            <Input placeholder="name@gmail.com" className=""  />
                        </span>
                    </div>

                    <div className="flex w-full gap-11" >
                        <span className="flex flex-col w-full gap-2" >
                            <label className="text-[14px] font-semibold" >Department</label>
                            <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a department" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="hr">HR</SelectItem>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="telecom">Telecom</SelectItem>
                                <SelectItem value="development">Development</SelectItem>
                            </SelectContent>
                            </Select>
                        </span>
                        <span className="flex flex-col w-full gap-2" >
                            <label className="text-[14px] font-semibold" >Role</label>
                            <Select>
                                <SelectTrigger className="w-full ">
                                    <SelectValue placeholder="Select a Role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="product designer">Product Designer</SelectItem>
                                    <SelectItem value="frontend developer">Frontend Developer</SelectItem>
                                    <SelectItem value="backend developer">Backend Developer</SelectItem>
                                    <SelectItem value="human resources">Human Resources</SelectItem>
                                    <SelectItem value="customer support">Customer Support</SelectItem>
                                </SelectContent>
                             </Select>
                        </span>
                    </div>
                    
                    <span className="flex flex-col gap-2" >
                        <label className="text-[14px] font-semibold" >Start Date</label>
                        <Popover>
                            <PopoverTrigger className="w-full flex  border-[1px] rounded-md p-2 text-sm text-stone-500 shadow">
                                Start date
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md"
                                captionLayout="dropdown"
                                />
                            </PopoverContent>
                            </Popover>
                    </span>

                    <span className="flex items-center justify-between " >
                        <span className="" >
                            <h1 className="text-[14px] font-bold" >Add Employee</h1>
                            <p className="text-[12px] text-[#71717a]  " >Add your employees on the HR Mini</p>
                        </span>
                        <span className="flex items-center space-x-2">
                            <Switch id="airplane-mode" onClick={() => setEmployeeStatus(employeeStatus === "Active" ? "Inactive" : "Active")} />
                            <label htmlFor="airplane-mode" className="text-sm">{employeeStatus}</label>
                        </span>
                    </span>
                    {!loading && (
                        <span className="flex flex-col gap-4 mt-5" >
                            <Button variant="default" className="w-full py-2.5 text-sm bg-[#02AA69] " ><Plus className="flex items-center justify-center " /> Add Employee</Button>
                            <Button variant="outline" className="border-black" >Cancel</Button>
                        </span>
                    )}
                    { loading && (
                        <span className="flex w-full items-center gap-4 " >
                            <Loader className="w-5 h-5 animate-spin text-stone-400" />
                            <p className="text-[14px] text-stone-600 font-medium  " >Loading...</p>
                        </span>
                    )}
                </form>
                <span className="absolute top-6 right-6" ><X onClick={() => onClose(false)} className="w-5 h-5 text-stone-400" /></span>
            </div>
        </section>
    )
}