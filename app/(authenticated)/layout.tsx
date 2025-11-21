import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Image from "next/image";
import Link from "next/link";
import { Settings } from "lucide-react";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dexwin HR Mini",
  description: "A mini HR management application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full ml-8 px-[2%] py-8">
              <div className="flex items-center justify-between w-full " >
                <span className="text-[18px] font-bold" >Good morning Kofi</span>
                <Link href="/settings" className="flex items-center justify-center w-10 h-10 border border-stone-300 rounded-full" ><Settings width={24} strokeWidth={1.5} /></Link>
              </div>
              {children}
            </main>
          </SidebarProvider>      
        </body>
    </html>
  );
}
