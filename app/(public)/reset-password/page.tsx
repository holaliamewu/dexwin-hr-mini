'use client';

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, CheckCircle, CircleCheck, Loader } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function AuthPage() {
    type TEmailForm = z.infer<typeof emailSchema>;
    type TPasswordForm = z.infer<typeof passwordSchema>;
    type TStep = "email" | "password" | "done";
    
    const [step, setStep] = useState<TStep>("done");
    const [loading, setLoading] =  useState(false);
    
    const emailSchema = z.object({
        email: z.string().email("Invalid email"),
    });
    
    const passwordSchema = z.object({
        newPassword: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string().min(8),
    }).refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });
    
    
    const emailForm = useForm<TEmailForm>({
        resolver: zodResolver(emailSchema),
    });

    const onSubmitEmail = () => {
        setStep("password");
    };


    const passwordForm = useForm<TPasswordForm>({
        resolver: zodResolver(passwordSchema),
    });

    const onSubmitPassword = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep("done");
        }, 1500);
    };


    const EmailFormPage = () => {
        return (
        <section className="flex flex-col items-center justify-center w-full max-w-[360px] " >
            <div className="flex flex-col gap-[2px] mb-12 text-center " >
                <h1 className="text-[30px] font-semibold " >Forgot Password</h1>
                <p className="font-light" >No worries, we’ll send you reset instructions.</p>
            </div>
            <form onSubmit={emailForm.handleSubmit(onSubmitEmail)} className="flex flex-col w-full gap-5" >
                <span className="flex flex-col w-full gap-1.5 " >
                    <label className="text-sm" >Email</label>
                    <Input type="email" className={clsx("w-full h-[44px]", emailForm.formState.errors.email && "border border-red-400 focus:outline-solid outline-2")} placeholder="Enter your email" {...emailForm.register("email")} />
                    { emailForm.formState.errors.email && <p className="text-sm text-red-500 mt-1" >Kindly provide a valid email “you@gmail.com”</p> }
                </span>
                <button type="submit" className="w-full h-[44px] text-white font-semibold bg-[#02AA69] px-3 mt-4 rounded-lg shadow " >Reset Password</button>
                <Link href="/" className="flex items-center justify-center gap-2  w-full h-[44px] text-sm font-medium px-3 rounded-lg " ><ArrowLeft />Back to log in</Link>
            </form>
        </section>
        )}

        
    const PasswordFormPage = () => {
        return (
        <section className="flex flex-col items-center justify-center w-full max-w-[360px] " >
            <div className="flex flex-col gap-[2px] mb-12 text-center " >
                <h1 className="text-[30px] font-semibold " >Set new password</h1>
                <p className="font-light" >Your new password must be different to previously used passwords.</p>
            </div>
            <form onSubmit={passwordForm.handleSubmit(onSubmitPassword)} className="flex flex-col w-full gap-5" >
                <span className="flex flex-col w-full gap-1.5 " >
                    <label className="text-sm" >Create New password</label>
                    <Input className="w-full h-[44px] " type="password" placeholder="Enter your password" {...passwordForm.register("newPassword",)} />
                    { passwordForm.formState.errors.newPassword && <p className="text-sm text-red-500 mt-1" >{passwordForm.formState.errors.newPassword.message}</p> }
                </span>
                <span className="flex flex-col w-full gap-1.5 " >
                    <label className="text-sm" >Confirm New Password</label>
                    <Input className="w-full h-[44px]" type="password" placeholder="Enter your password" {...passwordForm.register("confirmPassword",)} />
                    { passwordForm.formState.errors.confirmPassword && <p className="text-sm text-red-500 mt-1" >{passwordForm.formState.errors.confirmPassword.message}</p> }
                </span>
                { !loading && (
                    <span className="flex flex-col w-full gap-4 mt-4" >
                        <button type="submit" className="w-full h-[44px] text-white font-semibold bg-[#02AA69] px-3 rounded-lg shadow " >Reset Password</button>
                        <Link href="/" className="flex items-center justify-center gap-2  w-full h-[44px] text-sm font-medium px-3 rounded-lg " ><ArrowLeft />Back to log in</Link>
                    </span>)}
                { loading && (
                    <span className="flex w-full items-center justify-center gap-4 mt-8" >
                        <Loader className="w-5 h-5 animate-spin text-stone-400" />
                        <p className="text-[14px] text-stone-600 font-medium  " >Loading...</p>
                    </span>
                )}
            </form>
        </section>
        )}
    
    
    const PasswordResetCongratulatoryPage = () => {
        return (
        <section className="flex flex-col items-center justify-center w-full max-w-[360px] " >
            <div className="flex flex-col gap-[2px] text-center " >
                <Image src="/icons/check-circle.svg" alt="Password reset successful" width={56} height={56} className="mb-4 mx-auto" />
                <h1 className="text-[30px] font-semibold " >Password reset</h1>
                <p className="text-[16px] font-light" >Your password has been successfully reset. Click below to log in magically.</p>
            </div>
            <div className="flex flex-col w-full mt-8 " >
                <button type="submit" className="w-full h-[44px] text-white text-md font-semibold bg-[#02AA69] px-3 mt-4 rounded-lg shadow " >Continue</button>
                <Link href="/" className="flex items-center justify-center gap-2  w-full h-[44px] text-sm font-medium px-3 rounded-lg " ><ArrowLeft />Back to log in</Link>
            </div>
        </section>
        )}


  return(
    <section className="flex flex-col items-center justify-center w-full min-h-screen" >
        { step === "email" && ( <EmailFormPage /> )}
        { step === "password" && ( <PasswordFormPage /> )}
        { step === "done" && ( <PasswordResetCongratulatoryPage /> )}
    </section>
    )
    }