"use client";

import { Search, Filter, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="py-5 sticky top-0 z-50 backdrop-blur-xl px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-orange-500 font-medium hidden md:inline">
            Overview
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search for..."
              className="pl-10 w-82 bg-gray-50 border-gray-300 shadow-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="rounded-sm border border-gray-300" size="sm">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="rounded-sm border border-gray-300"  size="sm">
              <Bell className="h-4 w-4" />
            </Button>

            {/* User Avatar */}
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">BF</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
