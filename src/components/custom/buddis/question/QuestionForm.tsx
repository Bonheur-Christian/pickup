"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Clock, Check, X } from "lucide-react";

const categories = [
  { value: "no category", label: "No Category Selected" },
  { value: "transportation", label: "Transportation" },
  { value: "babysitting", label: "Babysitting" },
  { value: "other", label: "Other" },
];

export default function QuestionForm({
  onCancel,
  onSubmit,
}: {
  onCancel?: () => void;
  onSubmit?: (data: any) => void;
}) {
  const [question, setQuestion] = useState("");
  const [duration, setDuration] = useState(0);
  const [category, setCategory] = useState("");
  const [active, setActive] = useState(true);

  return (
    <Card className="p-6 rounded-xl border border-gray-200 max-w-xl w-full">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Interview Question
        </label>
        <Textarea
          placeholder="How would you handle an emergency while babysitting?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="resize-none min-h-[60px]"
        />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">
            Estimate Duration
          </label>
          <div className="relative">
            <Input
              type="number"
              min={0}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="pr-8"
            />
            <Clock className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">
            Select Category:
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="No Category Selected" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <label className="text-sm font-medium">Set as Active</label>
        <Switch checked={active} onCheckedChange={setActive} />
      </div>
      <div className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1 flex items-center gap-2"
          type="button"
          onClick={onCancel}
        >
          Cancel <X className="w-4 h-4" />
        </Button>
        <Button
          className="flex-1 flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white"
          type="button"
          onClick={() => onSubmit?.({ question, duration, category, active })}
        >
          Add Question <Check className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
