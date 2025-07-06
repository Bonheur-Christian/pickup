"use client";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  CheckCircle,
  Download,
  Share2,
  X,
  Phone,
  ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Image from "next/image";

interface BackgroundCheckModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BackgroundCheckModal({
  open,
  onOpenChange,
}: BackgroundCheckModalProps) {
  // Example state for the fields
  const [criminalRecord, setCriminalRecord] = useState("Not Found");
  const [idVerification, setIdVerification] = useState("Matched");
  const [schoolAffiliation, setSchoolAffiliation] = useState(
    "Confirmed (KIPP NYC)"
  );
  const [other, setOther] = useState("Not Found");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 bg-white rounded-lg border-0 max-w-3xl w-full">
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              Buddis Background Check Review
            </h2>
            <p className="text-sm text-gray-500 mt-1">Submitted 2 Days Ago</p>
          </div>
          <DialogClose asChild />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 px-6 pb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/avatar.png" alt="Jody Beer" />
            <AvatarFallback className="bg-gray-200 text-gray-700 text-sm">
              JB
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-900 text-sm">Jody Beer</div>
            <div className="text-sm text-gray-500">Nelda_Rau69@gmail.com</div>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Phone className="w-4 h-4" />
            <span className="text-sm">brianford@lok.com</span>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Criminal Record
              </label>
              <div className="relative">
                <Input
                  value={criminalRecord}
                  onChange={(e) => setCriminalRecord(e.target.value)}
                  className="text-green-600 font-medium border-green-400 bg-green-50/50 focus:border-green-300 focus:ring-green-100"
                />
              </div>
            </div>

            {/* ID Verification */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                ID Verification
              </label>
              <Select value={idVerification} onValueChange={setIdVerification}>
                <SelectTrigger className="text-green-600 font-medium border-green-400 bg-green-50/50 focus:border-green-300 focus:ring-green-100 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Matched">Matched</SelectItem>
                  <SelectItem value="Not Matched">Not Matched</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* School Affiliation */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                School Affiliation
              </label>
              <div className="relative">
                <Input
                  value={schoolAffiliation}
                  onChange={(e) => setSchoolAffiliation(e.target.value)}
                  className="text-green-600 font-medium border-green-400 bg-green-50/50 focus:border-green-300 focus:ring-green-100"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Other</label>
              <Select value={other} onValueChange={setOther}>
                <SelectTrigger className="text-green-600 font-medium border-green-400 bg-green-50/50 focus:border-green-300 focus:ring-green-100 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Not Found">Not Found</SelectItem>
                  <SelectItem value="Found">Found</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Success Status */}
          <div className="flex justify-center items-center gap-4 mb-8 px-16">
            <div className="">
              <Image
                src="/icons/check.svg"
                alt="check mark "
                width={60}
                height={60}
              />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-lg">
                Background Check was passed!
              </div>
              <div className="text-sm text-gray-500">
                2 hrs ago, 20th, May, 2025
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 py-6"
            >
              <Share2 className="w-4 h-4" />
              Share Result
            </Button>
            <Button className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-6">
              <Download className="w-4 h-4" />
              Download Report
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
