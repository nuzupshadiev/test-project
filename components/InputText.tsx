"use client";

import {
  ArrowUp,
  Code,
  Image as ImageIcon,
  ImagePlus,
  Music,
  Search,
  User,
  Video,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import BubbleWithClose from "./bubble";
import texture from "@/data/texture.png";

const MENU_ITEMS = [
  { icon: <Search size={18} />, label: "Deep Research" },
  { icon: <ImageIcon size={18} />, label: "Create Image" },
  { icon: <ImagePlus size={18} />, label: "Edit image" },
  { icon: <Video size={18} />, label: "Create Video" },
  { icon: <Music size={18} />, label: "Create Music" },
  { icon: <Code size={18} />, label: "Write Code" },
  { icon: <User size={18} />, label: "Characters" },
];

export default function CommandInput() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const selectedItemsRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const lastClientXRef = useRef(0);

  const availableItems = MENU_ITEMS.filter(
    (item) => !selectedItems.includes(item.label)
  );

  const adjustTextareaHeight = (element: HTMLTextAreaElement) => {
    const computed = window.getComputedStyle(element);
    const rawLineHeight = Number.parseFloat(computed.lineHeight || "0");
    const fallbackLineHeight =
      Number.parseFloat(computed.fontSize || "16") * 1.5;
    const lineHeight = Number.isFinite(rawLineHeight)
      ? rawLineHeight
      : fallbackLineHeight;

    const maxLines = 5;
    const maxHeight = lineHeight > 0 ? lineHeight * maxLines : element.scrollHeight;

    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, maxHeight)}px`;
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      adjustTextareaHeight(textareaRef.current);
    }
  }, [inputValue]);

  return (
    <div className="flex min-w-0 flex-col items-center w-[555px] min-h-[192px] h-auto">
      <div
        className="relative min-w-0 overflow-hidden w-full min-h-[192px] h-auto flex items-end justify-center"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          top: "2px",
          left: "0.5px",
          opacity: 1,
          borderRadius: "4.33px",
          background:
            "linear-gradient(0deg, rgba(74, 71, 76, 0.3) 2.15%, rgba(149, 143, 152, 0.3) 4.31%, rgba(197, 198, 201, 0.3) 6.62%, rgba(85, 83, 86, 0.3) 10.16%, rgba(32, 28, 31, 0.3) 17.16%, rgba(49, 47, 50, 0.3) 42.1%, rgba(74, 71, 77, 0.3) 81.81%, rgba(54, 51, 54, 0.3) 91.23%, rgba(88, 88, 88, 0.3) 100%)",
          boxShadow: "0px 1px 0px 0px #FFFFFF1A inset",
          transform: "none",
        }}
      >
        <Image
          src={texture}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover opacity-100"
          aria-hidden
          priority
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-12 bg-linear-to-b from-white/15 to-transparent opacity-30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-12 bg-linear-to-t from-white/15 to-transparent opacity-30" />

        <div
          className="z-10 flex min-w-0 flex-col w-[496px]"
          style={{
            opacity: 1,
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "35px",
            borderBottomLeftRadius: "35px",
            borderWidth: "0.5px",
            borderStyle: "solid",
            borderColor: "transparent",
            padding: "20px",
            gap: "14px",
            background:
              "linear-gradient(179.34deg, rgba(255, 255, 255, 0.18) 0.57%, rgba(255, 255, 255, 0.08) 154.9%)",
            borderImageSource:
              "linear-gradient(318.61deg, rgba(255, 255, 255, 0.1) 7.71%, rgba(255, 255, 255, 0.1) 29.6%), radial-gradient(50% 42.81% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
            borderImageSlice: 1,
            backdropFilter: "blur(3px)",
            boxShadow:
              "0px 19px 41px 0px #0000001A, 0px 75px 75px 0px #00000017, 0px 169px 101px 0px #0000000D, 0px 300px 120px 0px #00000003",
          }}
        >
          <textarea
            ref={textareaRef}
            placeholder="Type something…"
            rows={2}
            className="w-full resize-none border-0 bg-transparent text-base leading-6 text-zinc-300 shadow-none placeholder:text-zinc-500 focus-visible:outline-none overflow-y-auto"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
            onInput={(event) => adjustTextareaHeight(event.currentTarget)}
          />

          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <PopoverTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-[38.9922px] h-[38.9922px] rounded-full opacity-100 text-white hover:text-white shrink-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(44, 47, 52, 0.01) 0%, rgba(40, 43, 48, 0.01) 100%)",
                      transform: "rotate(-90deg)",
                      boxShadow: [
                        "0px 0px 2.17px 0px #FFFFCE4D inset",
                        "0px 0px 4.33px 0px #000000",
                        "0px 0px 2.17px 0px #000000",
                        "0px 2.17px 2.17px 0px #FFFFFF26",
                        "0px 1.08px 0px 0px #000000A6",
                        "0px -2.17px 2.17px 0px #00000040 inset",
                      ].join(", "),
                    }}
                  >
                    <svg
                      width="14"
                      height="13.5"
                      viewBox="0 0 14 13.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-100"
                    >
                      <defs>
                        <linearGradient
                          id="plusGradient"
                          x1="7"
                          y1="13.5"
                          x2="7"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#FFFFFF" />
                          <stop offset="1" stopColor="#999999" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M7 1.5V12M1.5 6.75H12.5"
                        stroke="url(#plusGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  side="top"
                  align="start"
                  sideOffset={6}
                  className="w-[204px] gap-2 rounded-[10px] border-[0.5px] border-white/10 bg-[#FFFFFF0F] p-2 text-zinc-100 backdrop-blur-[15px]"
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
                  container.setPointerCapture(event.pointerId);
                }}
                onPointerMove={(event) => {
                  if (selectedItems.length === 0) return;

                  const container = selectedItemsRef.current;
                  if (!container || !isDraggingRef.current) return;

                  const deltaX = event.clientX - lastClientXRef.current;
                  container.scrollLeft -= deltaX;
                  lastClientXRef.current = event.clientX;
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
                  selectedItems.length > 0 ? "cursor-grab active:cursor-grabbing" : ""
                }`}
              >
                {selectedItems.map((item) => (
                  <BubbleWithClose
                    key={item}
                    label={item}
                    onClose={() =>
                      setSelectedItems((prev) =>
                        prev.filter((value) => value !== item)
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="w-[40px] h-[40px] p-[3px] rounded-full opacity-100 flex items-center justify-center shrink-0"
              style={{
                background: `conic-gradient(
                  from 269.2deg at 50.98% 49.02%,
                  #6E6E6E -40.23deg,
                  #B9B9B9 22.97deg,
                  #B9B9B9 40.14deg,
                  #E1E1E1 86.68deg,
                  #A5A5A5 132.2deg,
                  #A5A5A5 152.97deg,
                  #5E5E5E 193.94deg,
                  #5C5C5C 221.15deg,
                  #3F3F3F 257.95deg,
                  #6E6E6E 319.77deg,
                  #B9B9B9 382.97deg
                )`,
              }}
              onClick={() => handleInputChange("")}
            >
              <div className="relative w-[40px] h-[40px] p-[3px] rounded-full bg-metal-conic flex items-center justify-center">
                <div className="absolute inset-0 m-auto w-[34px] h-[34px] rounded-full bg-[#949494] opacity-100" />
                <ArrowUp size={16} className="relative z-10 text-zinc-900" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
