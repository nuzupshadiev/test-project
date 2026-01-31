"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import subtractIcon from "@/data/Subtract.png";
import { MODES, type Mode } from "@/data/heroSlides";

export function ModeSwitch() {
  const [activeMode, setActiveMode] = useState<Mode>(MODES[0]);

  const getModeClasses = (mode: Mode) =>
    cn(
      "px-[15px] py-[10px] text-sm",
      mode === activeMode
        ? "bg-[#9775DE] text-white hover:bg-violet-400 rounded-full"
        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-50 rounded-xs"
    );

  return (
    <div className="flex w-full min-w-0 items-center justify-between gap-2 rounded-[5px] bg-zinc-900 p-[8px] shadow-inner">
      <div className="flex items-center justify-center rounded-full px-3 py-2">
        <Image
          src={subtractIcon}
          alt="Subtract"
          width={16}
          height={16}
          className="h-4 w-4"
          priority
        />
      </div>
      <div className="flex flex-wrap justify-end gap-[2px]">
        {MODES.map((mode) => (
          <Button
            key={mode}
            onClick={() => setActiveMode(mode)}
            className={getModeClasses(mode)}
          >
            {mode}
          </Button>
        ))}
      </div>
    </div>
  );
}
