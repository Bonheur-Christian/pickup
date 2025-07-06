import ApplicantCard from "@/components/custom/ApplicantCard";
import BuddiProfileCard from "@/components/custom/buddis/BuddiProfileCard";
import BuddisTable from "@/components/custom/buddis/BuddisTable";
import { BuddisMap } from "@/components/custom/BuddisMap";
import CoverageRequests from "@/components/custom/CoverageRequests";
import MetricCard from "@/components/custom/MetricCard";
import NotificationBanner from "@/components/custom/NotificationBanner";
import DashboardTable from "@/components/custom/overview/DashboardTable";
import SubTopBar from "@/components/custom/SubTopBar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Bell, MoreHorizontal, PlusIcon, Search } from "lucide-react";

export default function Buddis() {
  // Dummy data for 4 different metric cards
  const metricData = [
    {
      id: 1,
      percentage: "44.3%",
      change: "+2.1%",
      title: "Total Buddis",
      subtitle: "Active Users",
      isPositive: true,
    },
    {
      id: 2,
      percentage: "1,247",
      change: "+12.5%",
      title: "New Registrations",
      subtitle: "This Month",
      isPositive: true,
    },
    {
      id: 3,
      percentage: "89.2%",
      change: "-1.3%",
      title: "Completion Rate",
      subtitle: "Tasks",
      isPositive: false,
    },
    {
      id: 4,
      percentage: "2.4k",
      change: "+8.7%",
      title: "Total Hours",
      subtitle: "Logged",
      isPositive: true,
    },
   
  ];

  return (
    <div>
      <SubTopBar
        title="Buddi Management Portal"
        button1Text="Manage Interview Question Banks"
        button2Text="View Coverage Requests"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {metricData.map((metric) => (
          <MetricCard
            key={metric.id}
            percentage={metric.percentage}
            change={metric.change}
            title={metric.title}
            subtitle={metric.subtitle}
            isPositive={metric.isPositive}
          />
        ))}
      </div>
      <NotificationBanner
        title="234 Requests waiting for your approval"
        description="We analyzed your account's performance and here's what we found out"
        actionText="Continue "
      />

      <div className="flex gap-6 pt-10 py-4">
        <CoverageRequests />
        <BuddisMap />
      </div>
      <Tabs defaultValue="all" className="">
        <div className="flex w-full min-h-[700px] items-stretch gap-6 py-6">
          <div className="flex-1 h-full flex flex-col">
            <div className="flex gap-4 bg-white px-6 py-4 mb-6">
              <TabsList className="flex items-center border border-gray-200 rounded-lg overflow-hidden p-0 h-12 relative">
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
                <SelectTrigger className="w-[300px] py-[23px] bg-gray-50 border border-gray-200 rounded-md">
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
                className="py-[23px] px-6 w-10 rounded-lg border-gray-200 bg-white hover:bg-gray-50"
                aria-label="More options"
              >
                <MoreHorizontal className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
            <div className="flex items-center justify-end gap-4 mb-6">
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
                <Button
                  variant="ghost"
                  className="rounded-sm border border-gray-300"
                  size="sm"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 h-full">
              <TabsContent value="all" className="h-full">
                <BuddisTable />
              </TabsContent>
              <TabsContent value="older" className="h-full">
                <BuddisTable />
              </TabsContent>
              <TabsContent value="recent" className="h-full">
                <BuddisTable />
              </TabsContent>
            </div>
          </div>
          <div className="w-[400px] flex-shrink-0 h-full">
            <BuddiProfileCard />
          </div>
        </div>
      </Tabs>
    </div>
  );
}
