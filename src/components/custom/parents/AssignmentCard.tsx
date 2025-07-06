import { AssignmentData } from "@/lib/types/parentInterfaces";
import { DollarSign, Eye, GraduationCap, MapPin, MessageSquare, Phone, Star, Users } from "lucide-react";

// AssignmentCard Component
interface AssignmentCardProps {
  assignment: AssignmentData;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src="/api/placeholder/64/64"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{assignment.title}</h3>
          <p className="text-sm text-gray-500">{assignment.school}</p>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <span className={`px-3 py-1 text-xs font-medium text-white ${assignment.statusColor} rounded-full`}>
          ● {assignment.status}
        </span>
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
          <span className="text-orange-600 text-lg">📄</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="w-4 h-4 text-gray-400 mr-2" />
          <span className="text-sm text-gray-700">+1-212-1234567</span>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center mr-2">
            <GraduationCap className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase">School</div>
            <div className="text-sm font-medium text-gray-700">{assignment.school}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center mr-2">
            <MapPin className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase">Location</div>
            <div className="text-sm font-medium text-gray-700">{assignment.location}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center mr-2">
            <DollarSign className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase">Fee Per Hour</div>
            <div className="text-sm font-medium text-green-600">$40</div>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-6">
      <p className="text-sm font-medium text-gray-700 mb-3">Assigned Kids:</p>
      <div className="flex items-center space-x-6">
        {assignment.kids.map((kid, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
              <Users className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-gray-700">{kid.name}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex space-x-3">
      <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
        <Eye className="w-4 h-4 mr-2" />
        View Timesheets
      </button>
      <button className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors flex items-center justify-center">
        <MessageSquare className="w-4 h-4 mr-2" />
        Message Parent
      </button>
    </div>
  </div>
);

export default AssignmentCard;