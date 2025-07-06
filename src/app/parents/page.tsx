"use client";

import React, { useState } from "react";
import {


  Plus,
  Search,

} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import StatsCard from "@/components/custom/parents/StatCard";
import ProfileCard from "@/components/custom/parents/ProfileCard";
import PersonalDetails from "@/components/custom/parents/PersonalDetailsCard";
import AssignmentCard from "@/components/custom/parents/AssignmentCard";
import EmptyAssignments from "@/components/custom/parents/NoAssignments";
import TimesheetRow from "@/components/custom/parents/TimeSheetRow";

// Interfaces
export interface ProfileData {
  name: string;
  email: string;
  phone: string;
  status: string;
  rating: number;
  profileImage: string;
  fullName: string;
  location: string;
  resume: string;
  school: string;
  id_number: string;
}

interface StatsData {
  label: string;
  count: number;
  color: string;
  textColor: string;
  percentage?: string;
}

interface Kid {
  name: string;
  avatar: string;
}

interface AssignmentData {
  id: number;
  title: string;
  school: string;
  location: string;
  status: string;
  statusColor: string;
  kids: Kid[];
}

interface TimesheetData {
  id: number;
  week: string;
  date: string;
  user: string;
  email: string;
  shifts: string;
  amount: string;
  status: string;
}

// Mock data
const profileData: ProfileData = {
  name: "Brian Ford",
  email: "brianford@example.com",
  phone: "+1-212-1234567",
  status: "Active",
  rating: 4.0,
  profileImage: "/api/placeholder/80/80",
  fullName: "Brian Ford",
  location: "Brooklyn, New York",
  resume: "brian_resume.pdf",
  school: "NYU - Year 3, Child Psychology",
  id_number: "0000-7856-4530-4568",
};

const statsData: StatsData[] = [
  {
    label: "Assigned",
    count: 2,
    color: "bg-teal-100",
    textColor: "text-teal-800",
  },
  {
    label: "Timesheets",
    count: 3,
    color: "bg-green-100",
    textColor: "text-green-800",
    percentage: "+100%",
  },
  {
    label: "Reports",
    count: 2,
    color: "bg-purple-100",
    textColor: "text-purple-800",
    percentage: "+400%",
  },
  {
    label: "Payments",
    count: 2,
    color: "bg-red-100",
    textColor: "text-red-800",
    percentage: "+100%",
  },
];

const timesheetData: TimesheetData[] = [
  {
    id: 1,
    week: "Week 1",
    date: "2 & 31, May, 2025",
    user: "Brian Ford",
    email: "brianford@example.com",
    shifts: "21",
    amount: "$40",
    status: "Pending",
  },
];

const assignmentData: AssignmentData[] = [
  {
    id: 1,
    title: "Catering Assistant",
    school: "Ashton Community School",
    location: "Manchester",
    status: "Assigned",
    statusColor: "bg-green-500",
    kids: [
      { name: "Bryan Smith", avatar: "/api/placeholder/32/32" },
      { name: "Emma Johnson", avatar: "/api/placeholder/32/32" },
    ],
  },
  {
    id: 2,
    title: "Catering Assistant",
    school: "Ashton Community School",
    location: "Manchester",
    status: "Assigned",
    statusColor: "bg-green-500",
    kids: [
      { name: "Liam Brown", avatar: "/api/placeholder/32/32" },
      { name: "Olivia Davis", avatar: "/api/placeholder/32/32" },
    ],
  },
];

export interface TimesheetRowProps {
  timesheet: TimesheetData;
}

// Dashboard Component
const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"assignments" | "timesheets">(
    "assignments"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py- scendere6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
        {/* Profile Section */}
        <div className="flex items-start mb-6">
          <ProfileCard data={profileData} />
          <PersonalDetails data={profileData} />
        </div>
        {/* Tab Navigation */}
        <Tabs
          value={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as "assignments" | "timesheets")
          }
          className="w-full mb-6"
        >
           <TabsList className="flex items-center justify-center max-w-md mx-auto space-x-1 bg-transparent my-5">
            <TabsTrigger
              value="assignments"
              className="px-6 py-3 font-medium rounded-lg data-[state=active]:bg-orange-500 data-[state=active]:text-white bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            >
              Assignments
            </TabsTrigger>
            <TabsTrigger
              value="timesheets"
              className="px-6 py-3 font-medium rounded-lg data-[state=active]:bg-orange-500 data-[state=active]:text-white bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            >
              Timesheets & Trips
            </TabsTrigger>
          </TabsList>
          <TabsContent value="assignments">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assignmentData.length > 0 ? (
                assignmentData.map((assignment) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))
              ) : (
                <EmptyAssignments />
              )}
            </div>
          </TabsContent>
          <TabsContent value="timesheets">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Timesheets & Trips
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                      All
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                      Paid
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                      Unpaid
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                      Other
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Type to search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {timesheetData.map((timesheet) => (
                  <TimesheetRow key={timesheet.id} timesheet={timesheet} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
