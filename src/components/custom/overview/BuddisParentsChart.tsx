"use client"

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { MoreHorizontal, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const chartData = [
  { month: "Apr", buddis: 25, parents: 15 },
  { month: "May", buddis: 15, parents: 5 },
  { month: "Jun", buddis: 45, parents: 30 },
  { month: "Jul", buddis: 40, parents: 45 },
  { month: "Aug", buddis: 5, parents: 2 },
  { month: "Sep", buddis: 75, parents: 35 },
  { month: "Oct", buddis: 45, parents: 40 },
  { month: "Nov", buddis: 20, parents: 15 },
  { month: "Dec", buddis: 50, parents: 25 },
  { month: "Jan", buddis: 45, parents: 25 },
  { month: "Feb", buddis: 15, parents: 10 },
  { month: "Mar", buddis: 75, parents: 25 },
]

const chartConfig = {
  buddis: {
    label: "Buddis",
    color: "#60a5fa", // Light blue
  },
  parents: {
    label: "Parents",
    color: "#2563eb", // Dark blue
  },
}

export default function BuddisParentsChart() {
  return (
      <Card className="w-full max-w-3xl h-[400px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-xl font-medium text-gray-900">Buddis vs Parents</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4 text-gray-500" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#60a5fa]"></div>
                <span className="text-gray-600">Buddis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#2563eb]"></div>
                <span className="text-gray-600">Parents</span>
              </div>
            </div>
          </div>

          <ChartContainer config={chartConfig} className="h-50 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9ca3af" }}
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 100]}
                />
                <ChartTooltip content={<ChartTooltipContent />} formatter={(value, name) => [`${value}%`, name]} />
                <Bar dataKey="buddis" stackId="a" fill="var(--color-buddis)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="parents" stackId="a" fill="var(--color-parents)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">Data graph</span>
            <Button variant="link" className="text-blue-500 hover:text-blue-600 p-0 h-auto">
              <span className="mr-1">Open</span>
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
  )
}
