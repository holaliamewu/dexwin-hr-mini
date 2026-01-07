"use client";

import { Button } from "@/components/ui/button";
import { Loader, Trash, X } from "lucide-react";
import { useState } from "react";
import { TModalProps } from "../page";


export default function DeleteDepartmentModal({ open, onClose }: TModalProps) {

    const [loading, setLoading] = useState(false);

    return(
        <section className="flex flex-col items-center justify-center absolute w-screen h-full top-0 left-0 bg-black/70 z-100" >
            <div className="relative min-w-[640px] h-fit bg-white p-6 rounded-xl" >
                <h1 className="text-[20px] font-bold" >Delete this?</h1>
                <p className="text-[14px] text-[#71717a]  mb-8" >Are you sure you want to delete a Department? </p>
                {!loading && (
                    <span className="flex items-center justify-end gap-4" >
                        <Button variant="outline" className="" >Cancel</Button>
                        <Button variant="default" className="py-[7.5px] px-6 py-2.5 text-sm bg-[#DC2626] " ><Trash className="" /> Delete</Button>
                    </span>
                )}
                { loading && (
                    <span className="flex w-full items-center gap-4 " >
                        <Loader className="w-5 h-5 animate-spin text-stone-400" />
                        <p className="text-[14px] text-stone-600 font-medium  " >Loading...</p>
                    </span>
                )}
                <span className="absolute top-6 right-6" ><X onClick={() => onClose(false)} className="w-5 h-5 text-stone-400" /></span>
            </div>
        </section>
    )
}