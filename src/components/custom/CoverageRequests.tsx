"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin } from "lucide-react"
import { Button } from "../ui/button"

const requests = [
  {
    name: "Latoya Langosh",
    email: "brianford@look.com",
    school: "School Name",
    status: "Unavailable",
    location: "Seren",
  },
  {
    name: "Latoya Langosh",
    email: "brianford@look.com",
    school: "School Name",
    status: "Unavailable",
    location: "Seren",
  },
  {
    name: "Latoya Langosh",
    email: "brianford@look.com",
    school: "School Name",
    status: "Unavailable",
    location: "Seren",
  },
]

export default function CoverageRequests() {
  return (
    <div className="bg-white rounded-lg max-w-3xl border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Coverage Requests (234)</h3>
      </div>

      <div className="p-4 space-y-4">
        {requests.map((request, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>LL</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">{request.name}</p>
                <Badge variant="destructive" className="text-xs">
                  {request.status}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 truncate">{request.email}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {request.school}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Phone className="w-3 h-3 text-blue-500" />
                  <MessageCircle className="w-3 h-3 text-blue-500" />
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    <span>{request.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <Button className="w-full bg-orange-500 text-white py-5 rounded-lg hover:bg-orange-600">View All</Button>
      </div>
    </div>
  )
}
