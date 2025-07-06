import { Download, Eye, FileText, GraduationCap, Mail, MapPin, Phone, User, X } from "lucide-react";
import { ProfileCardProps } from "./ProfileCard";

// PersonalDetails Component
const PersonalDetails: React.FC<ProfileCardProps> = ({ data }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border flex-1 ml-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      Personal Details
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Full Names</p>
            <p className="text-sm font-medium text-gray-900">{data.fullName}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-sm font-medium text-gray-900">{data.email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm font-medium text-gray-900">{data.location}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-red-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">{data.resume}</p>
              <p className="text-xs text-gray-400">5.09 MB • PDF</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Tel</p>
            <p className="text-sm font-medium text-gray-900">{data.phone}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <GraduationCap className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">School</p>
            <p className="text-sm font-medium text-gray-900">{data.school}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">ID</p>
            <p className="text-sm font-medium text-gray-900">{data.id_number}</p>
          </div>
        </div>
        <div className="flex space-x-2 mt-6">
          <button className="flex-1 px-4 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50 flex items-center justify-center">
            <X className="w-4 h-4 mr-2" />
            Deactivate
          </button>
          <button className="flex-1 px-4 py-2 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-600 flex items-center justify-center">
            <User className="w-4 h-4 mr-2" />
            Full Profile
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default PersonalDetails;