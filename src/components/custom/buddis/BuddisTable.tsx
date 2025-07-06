"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ChevronDown } from "lucide-react"

export default function BuddisTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const buddisData = [
    {
      id: "1",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "2",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "3",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "4",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "5",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "6",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "5",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "6",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "5",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "6",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "5",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "6",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
   
    {
      id: "7",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "8",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "9",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "10",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "11",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "12",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "13",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "14",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
    {
      id: "15",
      name: "Jody...",
      subName: "Nelda_P...",
      type: "School, Name",
      subType: "Area of study",
      assignments: "2 Parents",
      date: "2, May, 2025",
      status: "Available",
    },
  ]

  const handleRowSelect = (id: string) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]))
  }

  const handleSelectAll = () => {
    setSelectedRows(selectedRows.length === buddisData.length ? [] : buddisData.map((item) => item.id))
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">All Registered Buddis</h1>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12">
                <Checkbox checked={selectedRows.length === buddisData.length} onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead className="text-gray-600 font-medium">
                <div className="flex items-center gap-1">
                  Buddi
                  <ChevronDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="text-gray-600 font-medium">Type</TableHead>
              <TableHead className="text-gray-600 font-medium">
                <div className="flex items-center gap-1">
                  Assignments & Joined
                  <ChevronDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="text-gray-600 font-medium">
                <div className="flex items-center gap-1">
                  Status
                  <ChevronDown className="h-3 w-3" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buddisData.map((buddi) => (
              <TableRow key={buddi.id} className="hover:bg-gray-50">
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(buddi.id)}
                    onCheckedChange={() => handleRowSelect(buddi.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt={buddi.name} />
                      <AvatarFallback className="bg-orange-100 text-orange-600">{buddi.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900">{buddi.name}</div>
                      <div className="text-sm text-gray-500">{buddi.subName}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-900">{buddi.type}</div>
                    <div className="text-sm text-gray-500">{buddi.subType}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-900">{buddi.assignments}</div>
                    <div className="text-sm text-gray-500">{buddi.date}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
                    ● {buddi.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
