"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PlaneTakeoff } from "lucide-react";

const modes = ["Try Deepshi", "Try Deepshi Flow", "Try Deepshi Forge"];

export function ModeSwitch() {
  const [stateMode, setStateMode] = useState("Try Deepshi");

  return (
    <div className="w-2xl flex justify-between rounded-sm bg-zinc-900 p-2 gap-1">
      <div className="flex items-center justify-center rounded-md  px-3 py-2">
        <PlaneTakeoff className="h-4 w-4 text-zinc-300" />
      </div>
      <div className="flex gap-1">
        {modes.map((mode) => (
          <Button
            key={mode}
            onClick={() => setStateMode(mode)}
            className={cn(
              "px-5 py-2 text-sm",
              mode === stateMode
                ? "bg-violet-500 text-white rounded-full"
                : "text-zinc-400 rounded-none bg-zinc-700"
            )}
          >
            {mode}
          </Button>
        ))}
      </div>
    </div>
  );
}
