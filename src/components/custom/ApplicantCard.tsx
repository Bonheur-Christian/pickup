"use client ";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, School } from "lucide-react";
import Image from "next/image";

export default function ApplicantCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 w-full max-w-sm mx-auto overflow-hidden flex flex-col">
      {/* Video/Image Header */}
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          height={200}
          width={200}
          src="/meet.jpg"
          alt="Applicant Video"
          className="object-cover w-full h-full"
        />
        {/* Video icon overlay */}
        <div className="absolute top-3 right-3 bg-white/80 rounded-full p-1">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#fff" />
            <path d="M9 8.5v7l6-3.5-6-3.5z" fill="#333" />
          </svg>
        </div>
        {/* Timer badge */}
        <div className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs rounded-lg px-2 py-0.5 shadow">
          23h : 23m : 21s
        </div>
        {/* Camera icon */}
        <div className="absolute bottom-3 left-3 bg-white rounded-full p-1 shadow">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <rect x="3" y="7" width="13" height="10" rx="2" fill="#22c55e" />
            <path d="M17 9l4 3-4 3V9z" fill="#22c55e" />
          </svg>
        </div>
      </div>
      {/* Profile Section */}
      <div className="flex items-center gap-3 px-6 pt-4 pb-2">
        <Avatar className="size-10">
          <AvatarImage src="/avatar1.jpg" alt="Brian Ford" />
          <AvatarFallback>BF</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-gray-900">Brian Ford</span>
          <span className="text-xs text-gray-400">2 May 2025</span>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-2 px-6 py-2">
        <Button
          variant="outline"
          className="flex-1 border-red-400 text-red-500 hover:bg-red-50"
        >
          Reject
        </Button>
        <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2">
          Approve
          <span className="inline-block w-4 h-4 bg-white border border-orange-500 rounded-sm ml-1">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path
                d="M4 8l3 3 5-5"
                stroke="#f97316"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Button>
      </div>
      {/* Video icon below buttons */}
      <div className="flex justify-center py-1">
        <span className="bg-orange-100 rounded-full p-1">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#f97316" />
            <path d="M9 8.5v7l6-3.5-6-3.5z" fill="#fff" />
          </svg>
        </span>
      </div>
      {/* Personal Details */}
      <div className="px-6 pt-2 pb-4">
        <h3 className="text-base font-semibold mb-2">Personal Details</h3>
        <div className="divide-y divide-gray-100 space-y-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#f3f4f6" />
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    fill="#9ca3af"
                  />
                </svg>
              </span>{" "}
              Full Names
            </div>
            <div className="font-medium text-gray-900">John Doe</div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-4 h-4" /> Tel
            </div>
            <div className="font-medium text-gray-900">+250-786-564-924</div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" /> Email
            </div>
            <div className="font-medium text-gray-900 truncate max-w-[140px]">
              johndoe@example.com
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 text-gray-400">
              <School className="w-4 h-4" /> School
            </div>
            <div className="font-medium text-gray-900 truncate max-w-[140px]">
              NYU – Year 2, Child...
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" /> Location
            </div>
            <div className="font-medium text-gray-900 truncate max-w-[140px]">
              Brooklyn, New York
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 text-base font-semibold">
          View References
        </Button>
      </div>
    </div>
  );
}
