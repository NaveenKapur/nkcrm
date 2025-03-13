import { Button } from "@/components/ui/button"
import { CustomerTable } from "@/components/customers/customer-table"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function CustomersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <Button asChild>
          <Link href="/customers/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Customer
          </Link>
        </Button>
      </div>
      <CustomerTable />
    </div>
  )
}

