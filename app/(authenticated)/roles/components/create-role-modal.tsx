"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, Plus, X } from "lucide-react";
import { useState } from "react";
import { TModalProps } from "../page";
import { RoleSelect } from "./role-select";
import { toast } from "sonner";


export default function CreateRoleModal({open, onClose}:TModalProps) {

    const [loading, setLoading] = useState(false);

    return(
        <section className="flex flex-col items-center justify-center absolute w-screen h-screen top-0 left-0 bg-black/70 z-100" >
            <div className="relative min-w-[640px] h-fit bg-white p-6 rounded-xl" >
                <h1 className="text-[20px] font-bold" >Add a Role</h1>
                <p className="text-[14px] text-[#71717a]  " >Choose a role name and enter description to add a role</p>
                <form className="flex flex-col gap-6 mt-6">
                    <span className="flex flex-col gap-2" >
                        <label className="text-[14px] font-semibold" >Role Name</label>
                        <RoleSelect />
                    </span>
                    <span className="flex flex-col gap-2" >
                        <label className="text-[14px] font-semibold" >Description</label>
                        <Input placeholder="Enter a description" className=""  />
                    </span>
                    {!loading && (<span className="flex items-center justify-between" >
                        <Button variant="outline" className="border-black" >Cancel</Button>
                        <Button onClick={() => { setLoading(true); toast.success("Role added") }} variant="default" className="min-w-[175px] py-[7.5px] px-6 py-2.5 text-sm bg-[#02AA69] " ><Plus className="flex items-center justify-center border border-white rounded-full p-[2px] " /> Add Role</Button>
                    </span>)}
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