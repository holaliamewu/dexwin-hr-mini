import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Image from "next/image";
import Link from "next/link";
import { Providers } from "../providers";


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
        <Providers >
          <SidebarProvider>
              <AppSidebar />
              <main className="w-full ml-8 px-[2%] py-8">
                <div className="flex items-center justify-between w-full " >
                  <span className="text-[18px] font-bold" >Good morning Kofi</span>
                  <span className="flex items-center gap-2" >
                    <Link href="/notifications" className="flex items-center justify-center w-10 h-10 border border-stone-100 rounded-full" ><Image src="/icons/bell.svg" alt="Bell icon" width={24} height={24} /></Link>
                    <Link href="/notifications" className="flex items-center justify-center w-10 h-10 border border-stone-100 rounded-full" ><Image src="/icons/settings.svg" alt="Settings icon" width={24} height={24} /></Link>
                  </span>
                </div>
                {children}
              </main>
            </SidebarProvider>      
        </Providers>
        </body>
    </html>
  );
}
