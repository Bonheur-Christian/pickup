"use client";

import { BuddisMap } from "@/components/custom/BuddisMap";
import BuddisParentsChart from "@/components/custom/BuddisParentsChart";
import CoverageRequests from "@/components/custom/CoverageRequests";
import DashboardCard from "@/components/custom/DashboardCard";
import NotificationBanner from "@/components/custom/NotificationBanner";
import RecentRegistrations from "@/components/custom/RecentRegistrations";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function Home() {
  const dashboardData = [
    {
      number: 120,
      label: "Sales",
      percentage: "+15%",
    },
    {
      number: 200,
      label: "New Users",
      percentage: "+30%",
    },
    {
      number: 75,
      label: "Projects Completed",
      percentage: "+10%",
    },
    {
      number: 50,
      label: "Support Tickets",
      percentage: "-5%",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="pt-4">
          <h1 className="text-2xl font-medium">Hey There, Brian Ford!</h1>
          <p className="text-sm text-gray-400">
            Welcome back, we're happy to have you here!
          </p>
        </div>
        <div className="flex gap-6 items-center ">
          <Button size="default" variant="outline" className="py-5  ">
            Download Report
          </Button>
          <Button
            size="default"
            className="bg-orange-500 hover:bg-orange-600 rounded-sm py-5"
          >
            View Coverage Requests
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-lg border-gray-200 bg-white hover:bg-gray-50"
            aria-label="More options"
          >
            <MoreHorizontal className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6">
        {dashboardData.map((data, index) => (
          <DashboardCard
            key={index}
            number={data.number}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </div>
      <div className="flex gap-6 py-4">
        <BuddisParentsChart />
        <RecentRegistrations />
      </div>
      <NotificationBanner
        title={"20 Timesheets are fully and not Yet Paid!"}
        description={
          "We analyzed your account's performance and here's what we found out"
        }
        actionText={"View Full Timesheets"}
      />

      <div className="flex gap-6 pt-10 py-4">
        <CoverageRequests />
        <BuddisMap />
      </div>
    </div>
  );
}
