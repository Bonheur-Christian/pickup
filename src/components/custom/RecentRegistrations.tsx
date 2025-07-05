
import React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface Registration {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

const RecentRegistrations = () => {
  const registrations: Registration[] = [
    {
      id: '1',
      name: 'Latoya Langosh',
      email: 'buddi@gmail.com',
      avatar: '/avatar.png',
      status: 'Pending'
    },
    {
      id: '2',
      name: 'Abel Mohr',
      email: 'buddi@gmail.com',
      avatar: '/avatar.png',
      status: 'Pending'
    },
    {
      id: '3',
      name: 'Erick Champlin',
      email: 'buddi@gmail.com',
      avatar: '/avatar.png',
      status: 'Pending'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Registrations</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="space-y-4 mb-6 border-b border-gray-200">
        {registrations.map((registration) => (
          <div 
            key={registration.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <Image 
                src={registration.avatar} 
                alt={registration.name}
                width={50}
                height={50}
                  className="w-full h-full object-cover"
              
              />
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 truncate">
                {registration.name}
              </h3>
              <p className="text-sm text-gray-500 truncate">
                {registration.email}
              </p>
            </div>

            {/* Status and Arrow */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                {registration.status}
              </span>
              <ChevronRight 
                size={16} 
                className="text-gray-400 group-hover:text-gray-600 transition-colors" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-6 px-4   transition-colors">
        View All
      </Button>
    </div>
  );
};

export default RecentRegistrations;
