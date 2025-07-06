import { ProfileData } from "@/app/parents/page";
import { Phone, Star, User, X } from "lucide-react";

// ProfileCard Component
export interface ProfileCardProps {
  data: ProfileData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ data }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border w-80">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={data.profileImage}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>
        <p className="text-sm text-gray-500">BUG_354_Sea</p>
      </div>
      <div className="flex items-center space-x-1">
        <Phone className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-600">{data.phone}</span>
      </div>
      <div className="flex items-center space-x-1">
        <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          {data.status}
        </div>
      </div>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(data.rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-500 ml-2">{data.rating}</span>
      </div>
      <div className="flex space-x-2 w-full">
        <button className="flex-1 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center">
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
);
export default ProfileCard;