"use client";
import { ArrowUp, Plus, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CommandInput() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const selectedItemsRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const lastClientXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const MENU_ITEMS = [
    { icon: <Plus size={18} />, label: "Deep Research" },
    { icon: <Plus size={18} />, label: "Create Image" },
    { icon: <Plus size={18} />, label: "Edit image" },
    { icon: <Plus size={18} />, label: "Create Video" },
    { icon: <Plus size={18} />, label: "Create Music" },
    { icon: <Plus size={18} />, label: "Write Code" },
    { icon: <Plus size={18} />, label: "Characters" },
  ];
  const availableItems = MENU_ITEMS.filter(
    (item) => !selectedItems.includes(item.label)
  );

  const adjustTextareaHeight = (element: HTMLTextAreaElement) => {
    const computed = window.getComputedStyle(element);
    const lineHeight = Number.parseFloat(computed.lineHeight || "0");
    const maxLines = 5;
    const maxHeight =
      lineHeight > 0 ? lineHeight * maxLines : element.scrollHeight;

    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, maxHeight)}px`;
  };
  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (textareaRef.current) {
      adjustTextareaHeight(textareaRef.current);
    }
  };

  return (
    <div className="flex w-full min-w-0 flex-col items-center bg-[#050505]">
      <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.55)] backdrop-blur-md">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-white/20 to-transparent opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-white/15 to-transparent opacity-30" />
        <div className="flex min-w-0 flex-col gap-6 rounded-sm rounded-b-[46px] bg-linear-to-b from-white/10 to-white/5 p-5">
          <textarea
            ref={textareaRef}
            placeholder="Type something…"
            rows={1}
            className="max-h-36 w-full resize-none border-0 bg-transparent text-base text-zinc-300 shadow-none placeholder:text-zinc-500 focus-visible:outline-none"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
          />

          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <PopoverTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Plus size={18} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  side="top"
                  align="start"
                  sideOffset={6}
                  className="w-64 rounded-2xl border border-white/10 bg-white/5 p-2 text-zinc-100 backdrop-blur-sm"
                >
                  <div className="flex flex-col gap-1">
                    {availableItems.map((item) => (
                      <Button
                        key={item.label}
                        variant="ghost"
                        className="justify-start gap-3 text-sm text-zinc-200 hover:bg-white/10"
                        onClick={() => {
                          setSelectedItems((prev) => [...prev, item.label]);
                          setIsMenuOpen(false);
                        }}
                      >
                        <span className="text-zinc-300">{item.icon}</span>
                        {item.label}
                      </Button>
                    ))}
                    {availableItems.length === 0 && (
                      <div className="px-3 py-2 text-sm text-zinc-500">
                        No more actions
                      </div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>

              <div
                ref={selectedItemsRef}
                onPointerDown={(event) => {
                  if (selectedItems.length === 0) return;
                  if (event.button !== 0) return;
                  if ((event.target as HTMLElement).closest("button")) return;
                  const container = selectedItemsRef.current;
                  if (!container) return;
                  isDraggingRef.current = true;
                  lastClientXRef.current = event.clientX;
                  dragDistanceRef.current = 0;
                  container.setPointerCapture(event.pointerId);
                }}
                onPointerMove={(event) => {
                  if (selectedItems.length === 0) return;
                  const container = selectedItemsRef.current;
                  if (!container || !isDraggingRef.current) return;
                  const deltaX = event.clientX - lastClientXRef.current;
                  container.scrollLeft -= deltaX;
                  lastClientXRef.current = event.clientX;
                  dragDistanceRef.current += Math.abs(deltaX);
                }}
                onPointerUp={(event) => {
                  if (selectedItems.length === 0) return;
                  const container = selectedItemsRef.current;
                  if (!container) return;
                  isDraggingRef.current = false;
                  container.releasePointerCapture(event.pointerId);
                }}
                onPointerLeave={() => {
                  if (selectedItems.length === 0) return;
                  isDraggingRef.current = false;
                }}
                onWheel={(event) => {
                  if (selectedItems.length === 0) return;
                  const container = selectedItemsRef.current;
                  if (!container) return;
                  if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                    container.scrollLeft += event.deltaY;
                  }
                }}
                className={`flex min-h-12 min-w-0 flex-1 flex-nowrap items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                  selectedItems.length > 0
                    ? "cursor-grab active:cursor-grabbing"
                    : ""
                }`}
              >
                {selectedItems.map((item) => (
                  <div
                    key={item}
                    className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/15 bg-linear-to-b from-white/10 to-white/5 px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.32em] text-zinc-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.35)]"
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedItems((prev) =>
                          prev.filter((value) => value !== item)
                        )
                      }
                      className="rounded-full p-1 text-zinc-400 hover:text-zinc-200"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-zinc-300 text-zinc-900 transition-transform hover:scale-105 hover:bg-zinc-200 active:scale-95"
              onClick={() => handleInputChange("")}
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
