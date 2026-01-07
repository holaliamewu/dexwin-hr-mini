"use client"

import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "product designer",
    label: "Product Designer",
  },
  {
    value: "frontend developer",
    label: "Frontend Developer",
  },
  {
    value: "backend developer",
    label: "Backend Developer",
  },
  {
    value: "human resource management",
    label: "Human Resource Management",
  },
  {
    value: "customer support",
    label: "Customer Support",
  },
]

export function RoleSelect() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-[400] text-stone-3600 "
        >
          {value
            ? frameworks.find((item) => item.value === value)?.label
            : "Select framework..."}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex p-0 z-500">
        <Command className="w-full">
          <CommandInput placeholder="Search roles..." className="w-full h-9" />
          <CommandList className="w-full ">
            <CommandEmpty>No roles found.</CommandEmpty>
            <CommandGroup className="flex w-full">
              {frameworks.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
