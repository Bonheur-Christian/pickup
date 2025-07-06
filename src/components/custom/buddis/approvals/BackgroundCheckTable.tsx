"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";

const BackgroundStatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "pending":
        return "text-blue-600 bg-blue-50";
      case "passed":
        return "text-green-600 bg-green-50";
      case "failed":
        return "text-red-600 bg-red-50";
      case "flagged":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded text-sm font-medium ${getStatusStyles()}`}
    >
      • {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

interface BackgroundCheckData {
  id: string;
  name: string;
  school: string;
  academic: string;
  completedAt: string;
  status: "passed" | "pending" | "failed" | "flagged";
  avatar: string;
}

const mockBackgroundData: BackgroundCheckData[] = [
  {
    id: "1",
    name: "Kelly Cas...",
    school: "Mario, Koss...",
    academic: "School, Name\nArea of study",
    completedAt: "30, May, 2025",
    status: "failed",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Kelly Cas...",
    school: "Mario, Koss...",
    academic: "School, Name\nArea of study",
    completedAt: "30, May, 2025",
    status: "pending",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Kelly Cas...",
    school: "Mario, Koss...",
    academic: "School, Name\nArea of study",
    completedAt: "30, May, 2025",
    status: "passed",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Kelly Cas...",
    school: "Mario, Koss...",
    academic: "School, Name\nArea of study",
    completedAt: "30, May, 2025",
    status: "flagged",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "Kelly Cas...",
    school: "Mario, Koss...",
    academic: "School, Name\nArea of study",
    completedAt: "30, May, 2025",
    status: "passed",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "6",
    name: "Kelly Cas...",
    school: "Mario, Koss...",
    academic: "School, Name\nArea of study",
    completedAt: "30, May, 2025",
    status: "pending",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "7",
    name: "Kelly Cas...",
    school: "Mario, Koss...",
    academic: "School, Name\nArea of study",
    completedAt: "30, May, 2025",
    status: "pending",
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=32&h=32&fit=crop&crop=face",
  },
];

export default function BackgroundCheckTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">
          Background Checks
        </h2>
        <div className="flex items-center gap-4 mt-4">
          <button
            className="text-gray-400 border border-dashed rounded-md p-2 hover:bg-gray-50"
            type="button"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-6 py-3 w-8 min-w-[32px] max-w-[32px]">
                <Checkbox />
              </TableHead>
              <TableHead className="text-gray-600 text-sm font-medium px-6 py-3 truncate max-w-[120px] overflow-hidden">
                Group ↓
              </TableHead>
              <TableHead className="text-gray-600 text-sm font-medium px-6 py-3 truncate max-w-[120px] overflow-hidden">
                Academic
              </TableHead>
              <TableHead className="text-gray-600 text-sm font-medium px-6 py-3 truncate max-w-[120px] overflow-hidden">
                Completed Registration At ↓
              </TableHead>
              <TableHead className="text-gray-600 text-sm font-medium px-6 py-3 w-32 min-w-[80px] max-w-[120px] truncate overflow-hidden">
                Status ↓
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockBackgroundData.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell className="px-6 py-3 w-8 min-w-[32px] max-w-[32px]">
                  <Checkbox />
                </TableCell>
                <TableCell className="px-6 py-3 max-w-[120px] truncate overflow-hidden">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 truncate max-w-[80px]">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-[80px]">
                        {item.school}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-pre-line text-sm text-gray-900 truncate max-w-[120px] overflow-hidden">
                  {item.academic}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm text-gray-500 truncate max-w-[120px] overflow-hidden">
                  {item.completedAt}
                </TableCell>
                <TableCell className="px-6 py-4">
                  <BackgroundStatusBadge status={item.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
