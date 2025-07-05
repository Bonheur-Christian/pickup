"use client"

import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface NotificationBannerProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  onActionClick?: () => void;
  variant?: 'warning' | 'info' | 'success' | 'error';
}

export default function  NotificationBanner  ({
  icon,
  title,
  description,
  actionText,
  onActionClick,
  variant = 'warning'
}: NotificationBannerProps) {
  const variantStyles = {
    warning: 'bg-orange-50 border-orange-200 text-orange-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  };

  const buttonStyles = {
    warning: 'bg-orange-500 hover:bg-orange-600',
    info: 'bg-blue-500 hover:bg-blue-600',
    success: 'bg-green-500 hover:bg-green-600',
    error: 'bg-red-500 hover:bg-red-600'
  };

  return (
    <div className={`rounded-lg border p-2 ${variantStyles[variant]} w-full mx-auto`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            {icon || <Building2 size={24} className="text-orange-600" />}
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">
              {title}
            </h3>
            <p className="text-sm opacity-80">
              {description}
            </p>
          </div>
        </div>
        <Button
          onClick={onActionClick}
          className={`${buttonStyles[variant]} text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors hover:shadow-md flex-shrink-0`}
        >
          {actionText}
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};
