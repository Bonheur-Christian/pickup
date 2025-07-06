import { Users } from "lucide-react";


// EmptyAssignments Component
const EmptyAssignments: React.FC = () => (
  <div className="bg-white rounded-lg p-12 shadow-sm border text-center">
    <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
      <Users className="w-8 h-8 text-gray-400" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">
      No assignments yet
    </h3>
    <p className="text-gray-500 mb-4">
      This buddy hasn't been assigned to any kids yet.
    </p>
    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
      Create Assignment
    </button>
  </div>
);
export default EmptyAssignments;