"use client";

import SubTopBar from "@/components/custom/SubTopBar";
import QuestionBankCard from "@/components/custom/buddis/question/QuestionBankCard";
import QuestionForm from "@/components/custom/buddis/question/QuestionForm";
import StudentLite from "@/components/custom/buddis/question/StudentLite";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Ellipsis, Filter, ListFilter, PlusIcon, Search } from "lucide-react";
import { useState } from "react";

const dummyQuestions = [
  {
    number: 1,
    question: "Why are you interested in becoming a Buddi?",
    category: "Transportation",
    estimatedTime: "4 Mins",
    status: "Active" as const,
  },
  {
    number: 2,
    question: "Why are you interested in becoming a Buddi?",
    category: "Transportation",
    estimatedTime: "4 Mins",
    status: "Active" as const,
  },
  {
    number: 3,
    question: "Why are you interested in becoming a Buddi?",
    category: "Transportation",
    estimatedTime: "4 Mins",
    status: "Active" as const,
  },
  {
    number: 4,
    question: "Why are you interested in becoming a Buddi?",
    category: "Transportation",
    estimatedTime: "4 Mins",
    status: "Active" as const,
  },
  {
    number: 4,
    question: "Why are you interested in becoming a Buddi?",
    category: "Transportation",
    estimatedTime: "4 Mins",
    status: "Active" as const,
  },
  {
    number: 4,
    question: "Why are you interested in becoming a Buddi?",
    category: "Transportation",
    estimatedTime: "4 Mins",
    status: "Active" as const,
  },
];

export default function QuestionBank() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <div className="py-5 space-y-6">
      <SubTopBar
        title="Question Banks"
        button1Text="Manage Interview Question Banks"
        button2Text="View Coverage Requests"
      />
      <div className="flex items-center gap-6 ">
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Question Bank</h2>
            <Badge className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <span className="mr-1">🛈</span> {dummyQuestions.length} Questions
            </Badge>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search"
                className="pl-10 w-full bg-gray-50 border-gray-200 shadow-none py-5"
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-200 bg-white py-5"
            >
              <ListFilter color="green" />
              Filter
            </Button>
          </div>
          <div className="bg-white rounded-lg space-y-4 border border-gray-200 p-4">
            <div className="flex justify-between">
              <div>
                  <h2 className="font-medium">Question Bank</h2>
                  <p className="text-xs text-gray-500 mb-2">Last updated at 2, May, 2025</p>
              </div>
              <Ellipsis />
            </div>
            <div className="flex justify-end">
              <Button variant="ghost" className="flex items-center gap-2">
                <PlusIcon className="h-4 w-4" /> Add Question
              </Button>
            </div>
            {dummyQuestions.map((q) => (
              <QuestionBankCard
                key={q.number}
                {...q}
                expanded={expanded === q.number}
                onExpand={() =>
                  setExpanded(expanded === q.number ? null : q.number)
                }
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <QuestionForm />
          <StudentLite />
        </div>
      </div>
    </div>
  );
}
