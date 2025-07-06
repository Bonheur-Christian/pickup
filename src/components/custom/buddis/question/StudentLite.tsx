"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoreHorizontal } from "lucide-react";

export default function StudentLite() {
  return (
    <Card className="p-6 rounded-xl border border-gray-200 max-w-xl w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold">Student Lite</span>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </Button>
      </div>
      <div className="flex gap-4 mb-6">
        <div className="flex-1 bg-gray-50 rounded-lg p-4 flex flex-col justify-between border border-gray-100">
          <div className="text-xs text-gray-500 mb-1">
            Time Spent per Interview
          </div>
          <div className="text-sm font-medium mb-1">Highest Duration</div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-700">
              00:24:34
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="flex-1 bg-gray-50 rounded-lg p-4 flex flex-col justify-between border border-gray-100">
          <div className="text-xs text-gray-500 mb-1">
            Time Spent per Question
          </div>
          <div className="text-sm font-medium mb-1">Lowest Duration</div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-700">
              00:10:23
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex items-end gap-6">
        <div className="flex flex-col items-start justify-end">
          <span className="text-3xl font-bold text-gray-900 leading-none mb-2">
            00:20:30
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-1">
            Average
          </span>
          <span className="text-xs text-gray-400">Duration</span>
        </div>
        <div className="flex-1">
          {/* Simple SVG line chart */}
          <svg viewBox="0 0 120 40" fill="none" className="w-full h-16">
            <defs>
              <linearGradient id="bluefade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,35 Q15,20 30,25 Q45,35 60,20 Q75,10 90,25 Q105,35 120,20"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,35 Q15,20 30,25 Q45,35 60,20 Q75,10 90,25 Q105,35 120,20 L120,40 L0,40 Z"
              fill="url(#bluefade)"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
}
