"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { MoreHorizontal, PlusIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DashboardTable from "@/components/custom/overview/DashboardTable";
import ApplicantCard from "@/components/custom/ApplicantCard";
import BackgroundCheckTable from "./BackgroundCheckTable";
import BackgroundCheckCard from "./BackgroundCheckCard";

export default function BackgroundChecks() {
  return (
    <Tabs defaultValue="all" className="">
      <div className="flex w-full min-h-[700px] items-stretch gap-6 py-6">
        <div className="flex-1 h-full flex flex-col">
          <div className="flex justify-between gap-4 bg-white px-6 py-2 mb-8">
            <TabsList className="flex items-center border border-gray-200 rounded-md overflow-hidden p-0 h-10 relative">
              <TabsTrigger
                value="all"
                className="flex-1 h-full rounded-none border-0 bg-white text-gray-700 text-base font-medium data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 transition"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="passed"
                className="flex-1 h-full rounded-none border-0 bg-white text-green-600 text-base font-medium data-[state=active]:bg-green-50 data-[state=active]:text-green-700 transition"
              >
                Passed
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="flex-1 h-full rounded-none border-0 bg-white text-blue-600 text-base font-medium data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 transition"
              >
                Pending
              </TabsTrigger>
              <TabsTrigger
                value="failed"
                className="flex-1 h-full rounded-none border-0 bg-white text-red-500 text-base font-medium data-[state=active]:bg-red-50 data-[state=active]:text-red-700 transition"
              >
                Failed
              </TabsTrigger>
              <TabsTrigger
                value="flagged"
                className="flex-1 h-full rounded-none border-0 bg-white text-orange-500 text-base font-medium data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700 transition"
              >
                Flagged
              </TabsTrigger>
            </TabsList>
            <Button
              variant="outline"
              size="icon"
              className="py-[19px] px-6 w-10 rounded-lg border-gray-200 bg-white hover:bg-gray-50"
              aria-label="More options"
            >
              <MoreHorizontal className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
          <div className="flex-1 h-full">
            <TabsContent value="all" className="h-full">
              <BackgroundCheckTable />
            </TabsContent>
            <TabsContent value="older" className="h-full">
              <BackgroundCheckTable />
            </TabsContent>
            <TabsContent value="recent" className="h-full">
              <BackgroundCheckTable />
            </TabsContent>
          </div>
        </div>
        <div className="w-[400px] flex-shrink-0 h-full">
          <BackgroundCheckCard />
        </div>
      </div>
    </Tabs>
  );
}
