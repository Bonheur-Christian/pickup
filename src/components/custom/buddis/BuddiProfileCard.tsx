"use client";

import { useState } from "react";
import { File, MessageSquareDiff, MessageSquareX } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MessageSquare,
  ArrowRight,
  User,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Play,
  Download,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function BuddiProfileCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-gray-50">
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
              <MessageSquareDiff className="w-4 h-4 mr-2"/>
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
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Image
                src="/icons/check.svg"
                width={200}
                height={200}
                alt="check mark"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">
                Background Check was passed!
              </p>
              <p className="text-sm text-gray-500">
                2 hrs ago, 20th, May, 2025
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="text-gray-600 p-4 h-auto w-full justify-center"
          >
            View Details
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
              className="flex-1 text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
            >
              Deactivate
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
              Message Buddi
            </Button>
          </div>

          <Separator />

          {/* Profile Video Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Buddi's Profile Video
            </h3>

            <div className="relative rounded-lg overflow-hidden bg-gray-50 border border-gray-200 pb-4">
              <div className="aspect-video relative">
                <Image
                  width={200}
                  height={200}
                  src="/meet.jpg"
                  alt="Profile video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    Reviewed
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full w-12 h-12 bg-white/90 hover:bg-white text-gray-900"
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  >
                    <Play className="w-5 h-5 ml-0.5" />
                  </Button>
                </div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-3 ps-4">
                <p className="font-medium text-gray-900">Maroon 5</p>
                <p className="text-sm text-gray-500">23 May 2025</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Resume</h3>
            </div>

            <div className="flex justify-center gap-4">
              <div className=" border border-gray-200 rounded-lg py-6 px-2">
                <File size={60} color="orange" />
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 border border-gray-200 w-10 h-10 rounded-3xl"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 p-0">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
