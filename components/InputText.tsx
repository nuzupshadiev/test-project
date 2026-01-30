import { ArrowUp, Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CommandInput() {
  const menuItems = [
    { icon: <Plus size={18} />, label: "Deep Research" },
    { icon: <Plus size={18} />, label: "Create Image" },
    { icon: <Plus size={18} />, label: "Edit image" },
    { icon: <Plus size={18} />, label: "Create Video" },
    { icon: <Plus size={18} />, label: "Create Music" },
    { icon: <Plus size={18} />, label: "Write Code" },
    { icon: <Plus size={18} />, label: "Characters" },
  ];

  return (
    <div className="flex flex-col items-center bg-[#050505]">
      {/* Outer frosted box */}
      <div
        className="flex items-center justify-center w-full rounded-xl p-6
          bg-white/5 backdrop-blur-md
          shadow-[0_14px_31px_0_rgba(0,0,0,0.49),
                  0_56px_56px_0_rgba(0,0,0,0.43),
                  0_127px_76px_0_rgba(0,0,0,0.25),
                  0_225px_90px_0_rgba(0,0,0,0.07),
                  0_352px_99px_0_rgba(0,0,0,0.03)]"
      >
        {/* Inner command input */}
        <div
          className="flex flex-col w-full gap-8 p-5
            bg-linear-to-b from-white/10 to-white/3
            shadow-lg backdrop-blur-sm rounded-t-md rounded-b-[2rem]"
        >
          {/* Editable Input */}
          <input
            type="text"
            placeholder="Type something…"
            className="w-full bg-transparent outline-none border-none
              font-geist text-base text-gray-400 placeholder:text-gray-500 caret-zinc-300"
          />

          {/* Icon Row */}
          <div className="flex justify-between items-center w-full">
            {/* Popover Menu */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="flex justify-center items-center w-10 h-10
                    bg-linear-to-b from-[#2C2F3401] to-[#282B3001]
                    shadow-inner rounded-full text-white text-xl font-bold border-white/10 border-2"
                >
                  +
                </button>
              </PopoverTrigger>
              <PopoverContent
                side="top"
                align="start"
                sideOffset={5}
                className="w-64 p-2
                  bg-white/5 backdrop-blur-sm border border-white/10
                  rounded-2xl shadow-lg text-zinc-100"
              >
                <div className="flex flex-col space-y-2">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 text-left transition-colors"
                    >
                      <span className="text-zinc-300">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Knob */}
            <div className="flex items-center justify-center w-9 h-9 bg-gray-400 rounded-full shadow-inner">
              <ArrowUp size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
