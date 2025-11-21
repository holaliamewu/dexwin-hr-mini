import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Bell, ChevronsUpDown, User } from "lucide-react"
import Image from "next/image"
import { Popover, PopoverTrigger } from "./ui/popover"
import { PopoverContent } from "@radix-ui/react-popover"
import Link from "next/link"

export function AppSidebar() {

    const sidebarData = [
        { 
            title: "Departments", 
            icon: "/icons/layers.svg",
            link: "/departments" 
        },
        { 
            title: "Roles", 
            icon: "/icons/check-square.svg",
            link: "/roles" 
        },
        { 
            title: "Employees list", 
            icon: "/icons/user-circle.svg",
            link: "/employees-list" 
        },
        { 
            title: "Manage Employees", 
            icon: "/icons/user-group.svg",
            link: "/manage-employees" 
        },
        { 
            title: "Employee Profiles", 
            icon: "/icons/user-id.svg",
            link: "/employee-profiles" 
        },
        { 
            title: "Leave Requests", 
            icon: "/icons/receive-arrow.svg",
            link: "/leave-requests" 
        },
        { 
            title: "Attendance", 
            icon: "/icons/user-plus.svg",
            link: "/attendance" 
        },
    ]

    const footerDataOne = [
        { title: "Profile", link: "/profile" },
        { title: "Settings", link: "/settings" },
    ]

    const footerDataTwo = [
        { title: "Github", link: "/github" },
        { title: "Support", link: "/support" },
        { title: "API", link: "/api" },
    ]

  return (
    <Sidebar className="bg-white px-[30px] py-[20px] " >
      <SidebarHeader >
        <div className="flex items-center justify-between ">
            <span className="" >
                <Image src="/images/dexwin-logo.svg" alt="Dexwin Logo" width={84} height={18} />
                <h6 className="text-[12px] " >Enterprise</h6>
            </span>
            <Image src="/icons/bell.svg" alt="Notification icon" width={24} height={24} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupLabel className="mt-8 -mb-2" >Main Menu</SidebarGroupLabel>
        <SidebarGroup >
                <div className="flex flex-col gap-4" >
                    { sidebarData.map((item) => (
                        <div key={item.title} className="flex items-center gap-3 rounded-md hover:bg-gray-100 cursor-pointer" >
                            <Image src={item.icon} alt={`${item.title}icon`} width={24} height={24} className="" />
                            <span className="font-[400] hover:font-semibold" >{item.title}</span>
                        </div>
                    )) }
                </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter >
        <div className="flex items-center justify-between gap-4" >
            <span className="" >
                <Image src="/images/avatar.svg" alt="user's avatar" width={80} height={80} />
            </span>
            <span className="flex flex-col w-full" >
                <h3 className="text-sm font-medium" >Kofi Ampraku</h3>
                <p className="text-xs text-muted-foreground" >Admin</p>
            </span>
            <Popover >
                <PopoverTrigger >
                    <ChevronsUpDown />
                </PopoverTrigger>
                <PopoverContent className="" >
                    <div className="flex flex-col w-[240px] bg-white border border-stone-100 rounded-lg " >
                        <h6 className="px-3 py-2 text-stone-500 text-[12px] " >My account</h6>
                        <div className="flex flex-col " >
                            <Link href="/setting/profile" className="text-sm text-black cursor-pointer px-4 py-2 hover:bg-stone-100 " >Profile</Link>
                            <Link href="/setting/profile" className="text-sm text-black cursor-pointer px-4 py-2 hover:bg-stone-100  border-b" >Settings</Link>
                            <Link href="/setting/profile" className="text-sm text-black cursor-pointer px-4 py-2 hover:bg-stone-100 " >Github</Link>
                            <Link href="/setting/profile" className="text-sm text-black cursor-pointer px-4 py-2 hover:bg-stone-100  " >Support</Link>
                            <Link href="/setting/profile" className="text-sm text-stone-500 cursor-pointer px-4 py-2 hover:bg-stone-100  border-b" >API</Link>
                            <Link href="/setting/profile" className="text-sm text-black cursor-pointer px-4 py-2 text-red-400 hover:bg-red-100 " >Log out</Link>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}