import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const data = [
  {
    name: "Kelly Cassidy",
    email: "Mario.Koss@example.com",
    avatar: "/avatar1.jpg",
    type: "Completed Interview!",
    typeTime: "2 mins ago",
    length: "00:20:34",
    status: { label: "Rejected", variant: "destructive" },
  },
  {
    name: "Kelly Cassidy",
    email: "Mario.Koss@example.com",
    avatar: "/avatar1.jpg",
    type: "Completed Interview!",
    typeTime: "2 mins ago",
    length: "00:20:34",
    status: {
      label: "Pending",
      variant: "outline",
      color: "text-blue-500",
      dot: "bg-blue-500",
    },
  },
  {
    name: "Kelly Cassidy",
    email: "Mario.Koss@example.com",
    avatar: "/avatar1.jpg",
    type: "Completed Interview!",
    typeTime: "2 mins ago",
    length: "00:20:34",
    status: {
      label: "Approved",
      variant: "outline",
      color: "text-green-500",
      dot: "bg-green-500",
    },
  },
  {
    name: "Kelly Cassidy",
    email: "Mario.Koss@example.com",
    avatar: "/avatar1.jpg",
    type: "Completed Interview!",
    typeTime: "2 mins ago",
    length: "00:20:34",
    status: { label: "Rejected", variant: "destructive" },
  },
  {
    name: "Kelly Cassidy",
    email: "Mario.Koss@example.com",
    avatar: "/avatar1.jpg",
    type: "Completed Interview!",
    typeTime: "2 mins ago",
    length: "00:20:34",
    status: {
      label: "Online",
      variant: "outline",
      color: "text-green-500",
      dot: "bg-green-500",
    },
  },
  {
    name: "Kelly Cassidy",
    email: "Mario.Koss@example.com",
    avatar: "/avatar1.jpg",
    type: "Completed Interview!",
    typeTime: "2 mins ago",
    length: "00:20:34",
    status: {
      label: "Pending",
      variant: "outline",
      color: "text-blue-500",
      dot: "bg-blue-500",
    },
  },
  {
    name: "Kelly Cassidy",
    email: "Mario.Koss@example.com",
    avatar: "/avatar1.jpg",
    type: "Completed Interview!",
    typeTime: "2 mins ago",
    length: "00:20:34",
    status: {
      label: "Pending",
      variant: "outline",
      color: "text-blue-500",
      dot: "bg-blue-500",
    },
  },
  {
    name: "Kelly Cassidy",
    email: "Mario.Koss@example.com",
    avatar: "/avatar1.jpg",
    type: "Completed Interview!",
    typeTime: "2 mins ago",
    length: "00:20:34",
    status: { label: "Rejected", variant: "destructive" },
  },
];

export default function DashboardTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Pending Approvals</h2>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-600"
        >
          <MoreHorizontal className="w-6 h-6" />
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <input type="checkbox" />
              </TableHead>
              <TableHead>Group ↓</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Length ↓</TableHead>
              <TableHead>Status ↓</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 min-w-[180px]">
                    <Avatar>
                      <AvatarImage src={row.avatar} alt={row.name} />
                      <AvatarFallback>{row.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900 truncate max-w-[120px]">
                        {row.name}
                      </span>
                      <span className="text-xs text-gray-400 truncate max-w-[120px]">
                        {row.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-green-500 font-medium">
                      {row.type}
                    </span>
                    <span className="text-xs text-gray-400">
                      {row.typeTime}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-gray-700">
                  {row.length}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      row.status.variant as
                        | "default"
                        | "destructive"
                        | "outline"
                        | "secondary"
                    }
                    className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${
                      row.status.color || ""
                    }`}
                  >
                    {row.status.dot && (
                      <span
                        className={`w-2 h-2 rounded-full ${row.status.dot}`}
                      ></span>
                    )}
                    {row.status.label}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-gray-400 text-sm flex items-center gap-2">
          <Button variant="ghost" size="sm">
            &lt; Prev
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            ...
          </Button>
          <Button variant="outline" size="sm">
            5
          </Button>
          <Button variant="outline" size="sm">
            6
          </Button>
          <Button variant="ghost" size="sm">
            Next &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}
