"use client";

import BackgroundChecks from "@/components/custom/buddis/approvals/BackgroundChecks";
import ReferenceReviews from "@/components/custom/buddis/approvals/ReferenceReviews";
import InterviewReviews from "@/components/custom/InterviewReviews";
import SubTopBar from "@/components/custom/SubTopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Approvals() {
  return (
    <div>
      <SubTopBar
        title="Registration Approvals"
        button1Text="Manage Interview Question Banks"
        button2Text="View Coverage Requests"
      />
      <div className="">
        <div className="border-b">
          <div className="">
            <Tabs defaultValue="reference-reviews" className="w-full">
              <TabsList className="flex bg-gray-100/30 rounded-lg px-2 py-6 w-full justify-between mb-0 mt-4">
                <TabsTrigger
                  value="reference-reviews"
                  className="flex items-center px-6 py-4 rounded-lg  text-gray-500 transition"
                >
                  Reference Level Reviews
                  <span className="ml-2 px-2 py-0.5 text-xs bg-orange-100 text-orange-600 rounded">
                    233
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="interview-reviews"
                  className="flex items-center px-6 py-4 rounded-lg  text-gray-500 transition"
                >
                  Interview Reviews
                  <span className="ml-2 px-2 py-0.5 text-xs bg-orange-100 text-orange-600 rounded">
                    233
                  </span>
                </TabsTrigger>
                <span className="w-px h-6 bg-gray-200 mx-2 self-center" />
                <TabsTrigger
                  value="background-checks"
                  className="flex items-center px-6 py-4 rounded-lg  text-gray-500 transition"
                >
                  Background Checks
                  <span className="ml-2 px-2 py-0.5 text-xs bg-orange-100 text-orange-600 rounded">
                    233
                  </span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="reference-reviews">
                <ReferenceReviews />
              </TabsContent>
              <TabsContent value="interview-reviews">
                <InterviewReviews />
              </TabsContent>
              <TabsContent value="background-checks">
                <BackgroundChecks/>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
