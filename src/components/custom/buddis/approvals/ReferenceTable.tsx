"use client";

import React from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { ReferenceData } from "@/types/ReferenceData";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface ReferenceTableProps {
  data: ReferenceData[];
  onRowSelect: (reference: ReferenceData) => void;
  selectedId?: string;
}

const ReferenceTable: React.FC<ReferenceTableProps> = ({
  data,
  onRowSelect,
  selectedId,
}) => {
  return (
    <div className="bg-white rounded-lg border w-full">
      <div className="p-4 border-b">
        <h3 className="font-medium text-gray-900">Reference Level Reviews</h3>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader className="bg-gray-50 border-b">
            <TableRow>
              <TableHead className="px-4 py-2 text-left">
                <Input type="checkbox" className="rounded border-gray-300" />
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Group ↓
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                References& School
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Submitted At ↓
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Status ↓
              </TableHead>
              <TableHead className="px-4 py-2 text-left">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-200">
            {data.map((reference) => (
              <TableRow
                key={reference.id}
                className={`hover:bg-gray-50 cursor-pointer ${
                  selectedId === reference.id ? "bg-blue-50" : ""
                }`}
                onClick={() => onRowSelect(reference)}
              >
                <TableCell className="px-4 py-3">
                  <Input type="checkbox" className="rounded border-gray-300" />
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      width={200}
                      height={200}
                      src={reference.avatar}
                      alt={reference.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {reference.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {reference.school}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="text-sm text-gray-900">
                    {reference.references}
                  </div>
                  <div className="text-sm text-gray-500">
                    {reference.school}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-500">
                  {reference.submittedAt}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <StatusBadge status={reference.status} />
                </TableCell>
                <TableCell className="px-4 py-3">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-4 py-3 border-t">
        <button className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
          ← Prev
        </button>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded">
            1
          </button>
          <button className="w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded">
            2
          </button>
          <span className="text-sm text-gray-400">...</span>
          <button className="w-8 h-8 text-sm bg-blue-500 text-white rounded">
            5
          </button>
          <button className="w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded">
            6
          </button>
        </div>
        <button className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
          Next →
        </button>
      </div>
    </div>
  );
};

export default ReferenceTable;
