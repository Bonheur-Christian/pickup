import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Clock,
  Trash2,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface QuestionBankCardProps {
  number: number;
  question: string;
  category: string;
  estimatedTime: string;
  status: "Active" | "Inactive";
  expanded: boolean;
  onExpand: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function QuestionBankCard({
  number,
  question,
  category,
  estimatedTime,
  status,
  expanded,
  onExpand,
  onEdit,
  onDelete,
}: QuestionBankCardProps) {
  return (
    <Card className="px-2 flex flex-col gap-2 border border-gray-200 shadow-none">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={onExpand}
      >
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-sm">
          {number}
        </span>
        <span className="flex-1">
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-600 border-blue-100 ml-2"
          >
            {category}
          </Badge>
        </span>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </div>
      <div className="flex items-center gap-2 font-medium">
        <span className="text-gray-700">Q</span>
        <span className="text-gray-900">{question}</span>
      </div>
      {expanded && (
        <>
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Estimated Time:</span>
              <Badge className="bg-blue-500 text-white ml-1">
                {estimatedTime}
              </Badge>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span>Status:</span>
              <Badge className="bg-green-500 text-white ml-1">
                <CheckCircle className="w-4 h-4 mr-1 inline" />
                {status}
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1 flex items-center gap-2"
              onClick={onEdit}
            >
              Edit <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="destructive"
              className="flex-1 flex items-center gap-2"
              onClick={onDelete}
            >
              Delete <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </>
      )}
    </Card>
  );
}
