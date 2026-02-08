'use client';

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function LoginPage() {

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  type FormInput = z.infer<typeof schema>;

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      console.error(result.error);
      setLoading(false);
    } else {
      // Redirect or handle successful login
      toast.success("Logged in successfully!");
      
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/department" });
    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-[360px]">
        <div className="flex flex-col gap-[2px] mb-12 text-center">
          <h1 className="text-[30px] font-semibold">Log in to your account</h1>
          <p className="text-sm font-light">Welcome back! Please enter your details.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
          <span className="flex flex-col w-full gap-1.5">
            <label className="text-sm">Email</label>
            <Input
              className={clsx("w-full h-[44px] text-sm", errors.email && "border border-red-400 focus:outline-solid outline-2")}
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">Kindly provide a valid email “you@gmail.com”</p>}
          </span>
          <span className="flex flex-col w-full gap-1.5">
            <label className="text-sm">Password</label>
            <Input
              className="w-full h-[44px] text-sm"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">Password is invalid, should be at least 8 characters</p>}
          </span>
          {!loading && (
            <span className="flex flex-col w-full gap-4 mt-8">
              <button
                type="submit"
                className="w-full h-[44px] text-white text-md font-semibold bg-[#02AA69] px-3 rounded-lg shadow"
              >
                Sign in
              </button>
              <Button
                variant="outline"
                onClick={handleGoogleSignIn}
                className="w-full h-[44px] text-md px-3 rounded-lg shadow"
              >
                Sign in with Google
              </Button>
            </span>
          )}
          {loading && (
            <span className="flex w-full items-center justify-center gap-4 mt-8">
              <Loader className="w-5 h-5 animate-spin text-stone-400" />
              <p className="text-[14px] text-stone-600 font-medium">Loading...</p>
            </span>
          )}
        </form>
      </div>
    </section>
  );
}