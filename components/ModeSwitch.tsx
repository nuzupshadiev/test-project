"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PlaneTakeoff } from "lucide-react";
import { MODES } from "@/data/heroSlides";

export function ModeSwitch() {
  const [stateMode, setStateMode] = useState("Try Deepshi");

  return (
    <div className="flex w-2xl items-center justify-between rounded-sm bg-zinc-900 p-2 shadow-inner">
      <div className="flex items-center justify-center rounded-full px-3 py-2">
        <PlaneTakeoff className="h-4 w-4 text-zinc-300" />
      </div>
      <div className="flex gap-1">
        {MODES.map((mode) => (
          <Button
            key={mode}
            onClick={() => setStateMode(mode)}
            className={cn(
              "px-5 py-2 text-sm",
              mode === stateMode
                ? "bg-violet-500 text-white hover:bg-violet-400 rounded-full"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-50 rounded-xs"
            )}
          >
            {mode}
          </Button>
        ))}
      </div>
    </div>
  );
}
