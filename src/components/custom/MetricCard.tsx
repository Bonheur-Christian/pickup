"use client";

import { PieChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  percentage: string;
  change: string;
  title: string;
  subtitle: string;
  isPositive?: boolean;
}

export default function MetricCard({
  percentage,
  change,
  title,
  subtitle,
  isPositive = true,
}: StatsCardProps) {
  return (
    <Card className="w-[280px]">
      <CardContent className="p-4">
        <div className="flex items-center gap-4 justify-between">
          <div className="ml-4">
            <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center">
              <PieChart className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-semibold text-gray-900">
                {percentage}
              </span>
              <span
                className={`text-sm font-medium ${
                  isPositive ? "text-blue-500" : "text-red-500"
                }`}
                style={{ color: "#4A9EFF" }}
              >
                {change}
              </span>
            </div>
            <div className="space-y-0.5">
              <p className="text-gray-600 text-sm font-medium">{title}</p>
              <p className="text-gray-600 text-sm font-medium">{subtitle}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
