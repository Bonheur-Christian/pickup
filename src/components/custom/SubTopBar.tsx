"use client";

import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

interface SubTopBarProp {
  title: string;
  button1Text: string;
  button2Text: string;
}

export default function SubTopBar({title, button1Text, button2Text}:SubTopBarProp) {
  return (
    <div className="flex justify-between items-center">
      <div className="pt-4">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-sm text-gray-400">
          Welcome back, we&apos;re happy to have you here!
        </p>
      </div>
      <div className="flex gap-6 items-center ">
        <Button size="default" variant="outline" className="py-5  ">
          {button1Text}
        </Button>
        <Button
          size="default"
          className="bg-orange-500 hover:bg-orange-600 rounded-sm py-5"
        >
          {button2Text}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-lg border-gray-200 bg-white hover:bg-gray-50"
          aria-label="More options"
        >
          <MoreHorizontal className="h-4 w-4 text-gray-600" />
        </Button>
      </div>
    </div>
  );
}
