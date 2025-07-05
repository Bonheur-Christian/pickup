"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, PieChart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardCardProps {
  number: number;
  label: string;
  percentage: string;
}

export default function DashboardCard({
  number,
  label,
  percentage,
}: DashboardCardProps) {
  return (
      <Card className="p-6">
        <CardContent className="flex flex-col items-center space-y-2 p-0">
          <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center">
            <PieChart className="w-8 h-8 text-white" />
          </div>

          <p className="text-3xl font-bold text-gray-900">{number}</p>

          <p className="text-gray-500 text-lg">{label}</p>

          <div className="text-green-500 font-medium">{percentage}</div>

          <Button
            variant="link"
            className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors mt-4"
          >
            <span className="font-medium">View Details</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
  );
}
