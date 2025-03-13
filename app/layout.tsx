import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Search } from "@/components/search"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CRM System",
  description: "A modern CRM system built with Next.js",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <MainNav />
                <div className="ml-auto flex items-center space-x-4">
                  <Search />
                  <UserNav />
                </div>
              </div>
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'