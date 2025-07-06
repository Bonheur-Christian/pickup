"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function BuddisMap() {
  const [, setZoomLevel] = useState(1);

  return (
    <div className="bg-white rounded-lg w-full border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Buddis Location</h3>
      </div>

      <div className="relative h-100 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <defs>
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            <path
              d="M 50 150 Q 150 100 250 120 Q 300 130 350 80"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
            />

            <circle
              cx="50"
              cy="150"
              r="8"
              fill="#10b981"
              stroke="white"
              strokeWidth="2"
            />

            <circle
              cx="350"
              cy="80"
              r="8"
              fill="#3b82f6"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute top-4 right-4 flex flex-col space-y-1">
          <button
            onClick={() => setZoomLevel((prev) => Math.min(prev + 0.1, 2))}
            className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))}
            className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
