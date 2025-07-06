"use client"
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

export default function InterviewReviews(){
    return(
        <Tabs defaultValue="all" className="">
        <div className="flex w-full min-h-[700px] items-stretch gap-6 py-6">
          <div className="flex-1 h-full flex flex-col">
            <div className="flex gap-4 bg-white px-6 py-2 mb-8">
              <TabsList className="flex items-center border border-gray-200 rounded-lg overflow-hidden p-0 h-10 relative">
                <TabsTrigger
                  value="all"
                  className="flex-1 h-full rounded-none border-0 bg-white data-[state=active]:bg-gray-50 data-[state=active]:shadow-none data-[state=active]:text-black text-gray-700 text-lg font-normal focus-visible:ring-0 focus:outline-none border-r border-gray-200 first:rounded-l-lg last:rounded-none"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="older"
                  className="flex-1 h-full rounded-none border-0 bg-white data-[state=active]:bg-gray-50 data-[state=active]:shadow-none data-[state=active]:text-black text-gray-700 text-lg font-normal focus-visible:ring-0 focus:outline-none border-r border-gray-200 last:rounded-none"
                >
                  Older
                </TabsTrigger>
                <TabsTrigger
                  value="recent"
                  className="flex-1 h-full rounded-none border-0 bg-white data-[state=active]:bg-gray-50 data-[state=active]:shadow-none data-[state=active]:text-black text-gray-700 text-lg font-normal focus-visible:ring-0 focus:outline-none last:border-r-0 last:rounded-none"
                >
                  Recent
                </TabsTrigger>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="lg"
                      type="button"
                      className="h-full px-4 flex items-center justify-center border-0 bg-white rounded-none border-l border-gray-200 text-gray-400 hover:bg-gray-100 focus:outline-none focus-visible:ring-0 rounded-r-lg relative"
                    >
                      <PlusIcon className="w-6 h-6" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="mt-2">
                    <DropdownMenuItem>New Item</DropdownMenuItem>
                    <DropdownMenuItem>Import</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TabsList>
              <Select>
                <SelectTrigger className="w-[300px] py-[19px] bg-gray-50 border border-gray-200 rounded-md">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type1">Type 1</SelectItem>
                  <SelectItem value="type2">Type 2</SelectItem>
                  <SelectItem value="type3">Type 3</SelectItem>
                </SelectContent>
              </Select>
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
                <DashboardTable />
              </TabsContent>
              <TabsContent value="older" className="h-full">
                <DashboardTable />
              </TabsContent>
              <TabsContent value="recent" className="h-full">
                <DashboardTable />
              </TabsContent>
            </div>
          </div>
          <div className="w-[400px] flex-shrink-0 h-full">
            <ApplicantCard />
          </div>
        </div>
      </Tabs>
    )
}