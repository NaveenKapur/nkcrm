"use client"

import { Progress } from "@/components/ui/progress"

const dealStages = [
  { name: "Lead", count: 235, percentage: 100 },
  { name: "Qualified", count: 180, percentage: 76 },
  { name: "Meeting", count: 128, percentage: 54 },
  { name: "Proposal", count: 72, percentage: 31 },
  { name: "Closed", count: 42, percentage: 18 },
]

export function DealsFunnel() {
  return (
    <div className="space-y-4">
      {dealStages.map((stage) => (
        <div key={stage.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{stage.name}</span>
            <span className="text-sm text-muted-foreground">{stage.count} deals</span>
          </div>
          <Progress value={stage.percentage} className="h-2" />
        </div>
      ))}
    </div>
  )
}

