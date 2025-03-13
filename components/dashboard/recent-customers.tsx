"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const recentCustomers = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    value: "$1,999.00",
    status: "Active",
    imageUrl: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    value: "$39.00",
    status: "Active",
    imageUrl: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    value: "$299.00",
    status: "Inactive",
    imageUrl: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    name: "William Kim",
    email: "will@email.com",
    value: "$99.00",
    status: "Active",
    imageUrl: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    value: "$39.00",
    status: "Active",
    imageUrl: "/placeholder.svg?height=32&width=32",
  },
]

export function RecentCustomers() {
  return (
    <div className="space-y-8">
      {recentCustomers.map((customer) => (
        <div key={customer.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={customer.imageUrl} alt={customer.name} />
            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{customer.name}</p>
            <p className="text-sm text-muted-foreground">{customer.email}</p>
          </div>
          <div className="ml-auto font-medium">{customer.value}</div>
          <Badge variant={customer.status === "Active" ? "default" : "secondary"} className="ml-2">
            {customer.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}

