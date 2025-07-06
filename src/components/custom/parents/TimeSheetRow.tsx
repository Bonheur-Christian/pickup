import { TimesheetRowProps } from "@/app/parents/page";
import { FileText, MoreHorizontal } from "lucide-react";

const TimesheetRow: React.FC<TimesheetRowProps> = ({ timesheet }) => (
  <div className="flex items-center justify-between p-4 bg-white border-b hover:bg-gray-50">
    <div className="flex items-center space-x-4">
      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
        <FileText className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="font-medium text-gray-900">{timesheet.week}</p>
        <p className="text-sm text-gray-500">{timesheet.date}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
        <img
          src="/api/placeholder/32/32"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="font-medium text-gray-900">{timesheet.user}</p>
        <p className="text-sm text-gray-500">{timesheet.email}</p>
      </div>
    </div>
    <div className="flex items-center space-x-6">
      <div className="text-center">
        <p className="font-medium text-gray-900">Shifts {timesheet.shifts}</p>
        <p className="text-sm text-orange-600 font-medium">
          {timesheet.status} {timesheet.amount}
        </p>
      </div>
      <button className="p-2 hover:bg-gray-100 rounded">
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export default TimesheetRow;