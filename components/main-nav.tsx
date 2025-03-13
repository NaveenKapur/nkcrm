"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Database, Users, Briefcase, BarChart, Settings, Mail, Calendar } from "lucide-react"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
        <Database className="h-6 w-6" />
        <span>CRM System</span>
      </Link>
      <Button
        variant={pathname === "/" ? "default" : "ghost"}
        className="text-sm font-medium transition-colors"
        asChild
      >
        <Link href="/">
          <BarChart className="h-4 w-4 mr-2" />
          Dashboard
        </Link>
      </Button>
      <Button
        variant={pathname === "/customers" ? "default" : "ghost"}
        className="text-sm font-medium transition-colors"
        asChild
      >
        <Link href="/customers">
          <Users className="h-4 w-4 mr-2" />
          Customers
        </Link>
      </Button>
      <Button
        variant={pathname === "/deals" ? "default" : "ghost"}
        className="text-sm font-medium transition-colors"
        asChild
      >
        <Link href="/deals">
          <Briefcase className="h-4 w-4 mr-2" />
          Deals
        </Link>
      </Button>
      <Button
        variant={pathname === "/emails" ? "default" : "ghost"}
        className="text-sm font-medium transition-colors"
        asChild
      >
        <Link href="/emails">
          <Mail className="h-4 w-4 mr-2" />
          Emails
        </Link>
      </Button>
      <Button
        variant={pathname === "/calendar" ? "default" : "ghost"}
        className="text-sm font-medium transition-colors"
        asChild
      >
        <Link href="/calendar">
          <Calendar className="h-4 w-4 mr-2" />
          Calendar
        </Link>
      </Button>
      <Button
        variant={pathname === "/settings" ? "default" : "ghost"}
        className="text-sm font-medium transition-colors"
        asChild
      >
        <Link href="/settings">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Link>
      </Button>
    </nav>
  )
}

