import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MessageSquare,
  Star,
  MessageSquareDiff,
  MessageSquareX,
  ArrowRight,
  User,
  Phone,
  Mail,
  GraduationCap,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import ReviewCheckModal from "@/components/custom/modals/review-check-modal";

export default function BackgroundCheckCard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-gray-50">
      <ReviewCheckModal open={modalOpen} onOpenChange={setModalOpen} />
      <Card className="border border-gray-200 bg-gray-50">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-between items-start mb-4">
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
              ● 2 Pickup Deals
            </Badge>
            <Badge className="bg-green-500 hover:bg-green-600 text-white">
              ● Available
            </Badge>
          </div>

          <div className="relative inline-block">
            <Avatar className="w-20 h-20 mx-auto">
              <AvatarImage src="/avatar.png" alt="John Doe Smith" />
              <AvatarFallback className="bg-orange-100 text-orange-600 text-xl">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <MessageSquare className="w-3 h-3 text-white" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mt-3">
            John Doe Smith
          </h2>
          <p className="text-gray-600 text-sm">johndoe@gmail.com</p>

          <div className="flex justify-center items-center gap-1 mt-2">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <Star className="w-4 h-4 text-gray-300" />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex justify-center items-center">
            <Button variant="link" className="text-gray-600 p-0 h-auto">
              <MessageSquareDiff className="w-4 h-4 mr-2" />
              Add your review
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="link" className="text-gray-600 p-0 h-auto">
              <MessageSquareX className="w-4 h-4 mr-2" />
              Profile Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <Separator />

          {/* Background Check Status */}
          <div className="flex items-center gap-3 px-12">
            <div className="w-16 h-16">
              <Image
                src="/icons/no-check.svg"
                width={200}
                height={200}
                alt="check mark"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">
                No Check Performed Yet!
              </p>
              <p className="text-sm text-gray-500">
                Completed Registration 2 hours ago
              </p>
            </div>
          </div>

          <Button
            variant="default"
            className="text-white p-4 h-auto w-full justify-center bg-orange-500 hover:bg-orange-600 duration-300 transition-all "
            onClick={() => setModalOpen(true)}
          >
            Perform Check
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Separator />

          {/* Personal Details */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Personal Details
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Full Names</p>
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Tel</p>
                  <p className="text-sm font-medium text-gray-900">
                    +250-786-564-924
                  </p>
                </div>
              </div>
              <Separator />

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">
                    johndoe@example.com
                  </p>
                </div>
              </div>
              <Separator />

              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">School</p>
                  <p className="text-sm font-medium text-gray-900">
                    NYU – Year 2, Child...
                  </p>
                </div>
              </div>
              <Separator />

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-sm font-medium text-gray-900">
                    Brooklyn, New York
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1 text-gray-600 border-gray-200 hover:bg-gray-50 bg-transparent py-6"
            >
              Full Profile
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 py-6">
              Message Buddi
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
