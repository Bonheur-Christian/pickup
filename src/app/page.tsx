"use client";

import { BuddisMap } from "@/components/custom/BuddisMap";
import BuddisParentsChart from "@/components/custom/overview/BuddisParentsChart";
import CoverageRequests from "@/components/custom/CoverageRequests";
import DashboardCard from "@/components/custom/overview/DashboardCard";
import NotificationBanner from "@/components/custom/NotificationBanner";
import RecentRegistrations from "@/components/custom/overview/RecentRegistrations";
import SubTopBar from "@/components/custom/SubTopBar";
import InterviewReviews from "@/components/custom/InterviewReviews";

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
      <SubTopBar
        title="Hey There, Brian Ford"
        button1Text="Download Report"
        button2Text="View Coverage Requests"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
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
          "We analyzed your account&apos;s performance and here&apos;s what we found out"
        }
        actionText={"View Full Timesheets"}
      />

      <div className="flex gap-6 pt-10 py-4">
        <CoverageRequests />
        <BuddisMap />
      </div>
      <InterviewReviews />
    </div>
  );
}
