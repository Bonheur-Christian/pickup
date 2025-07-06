"use client"

import React from 'react';
import { Phone, Mail, MapPin, Calendar, User, School, Download, Eye } from 'lucide-react';

interface ReferenceDetailsProps {
  reference: {
    id: string;
    name: string;
    school: string;
    email: string;
    phone: string;
    role: string;
    location: string;
    dateOfBirth: string;
    avatar: string;
    status: 'pending' | 'approved' | 'rejected' | 'online';
  };
}

const ReferenceDetails: React.FC<ReferenceDetailsProps> = ({ reference }) => {
  return (
    <div className="bg-gray-50 border rounded-lg p-6 space-y-6 w-full">
      <div className="flex items-center gap-3 pb-6 border-b">
        <img 
          src={reference.avatar} 
          alt={reference.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-medium text-gray-900">{reference.name}</h3>
          <p className="text-sm text-gray-500">2 May 2023</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Reference Details</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Full Names</p>
                <p className="text-sm font-medium">John Doe</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Tel</p>
                <p className="text-sm font-medium">+250-786-564-924</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-sm font-medium">johndoe@exampl...</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <School className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">School</p>
                <p className="text-sm font-medium">NYU – Year 2, Chil...</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="text-sm font-medium">School Principal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded hover:bg-red-50">
            Reject ✕
          </button>
          <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded hover:bg-orange-600">
            Approve Reference
          </button>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-4">Personal Details</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Full Names</p>
                <p className="text-sm font-medium">John Doe</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Tel</p>
                <p className="text-sm font-medium">+250-786-564-924</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-sm font-medium">johndoe@exampl...</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <School className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">School</p>
                <p className="text-sm font-medium">NYU – Year 2, Chil...</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-sm font-medium">Brooklyn, New York</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Date Of Birth</p>
                <p className="text-sm font-medium">30, May, 2008</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
              <span className="text-xs font-medium text-red-600">PDF</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">buddi_resume.pdf</p>
              <p className="text-xs text-gray-500">500 kb • 2 Days ago</p>
            </div>
            <div className="flex gap-1">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Download className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDetails;
