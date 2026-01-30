import { cn } from "@/lib/utils";
import SlideScale from "./Carousel";

export default function GlassMain() {
  return (
    <div className="relative flex w-full h-full">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(136,120,255,0.18),transparent_45%),radial-gradient(circle_at_70%_65%,rgba(120,240,255,0.12),transparent_55%)]" />
        <div className="absolute -top-24 -left-32 h-[700px] w-[700px] rounded-full border border-white/5 rotate-6" />
        <div className="absolute -top-52 left-12 h-[900px] w-[900px] rounded-full border border-white/5 -rotate-3" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(rgba(255,255,255,0.35)_1px,transparent_0)] bg-size-[3px_3px]" />
      </div>

      <div className="relative z-10 flex w-full">
        <div className="absolute left-10 top-10 flex flex-col items-start text-zinc-300/80">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-1 font-mono">
              <div className="border border-white/20 rounded-md px-2 py-1 text-sm tracking-[0.18em]">
                EVERMIND
              </div>
              <div className="border border-white/20 rounded-md px-2 py-1 text-sm tracking-[0.18em]">
                LABS.
              </div>
            </div>
            <div className="border border-white/20 rounded-full px-3 py-2">
              <div className="w-4 h-4 flex items-center justify-center border border-white/30 rounded-full text-xs">
                ✶
              </div>
            </div>
          </div>
          <div className="mt-3 text-[9px] text-zinc-400/70 uppercase tracking-[0.32em] font-mono leading-tight">
            |DEEPSH| FLOW |||||
            <br />
            PREMIUM AI PRODUCT
          </div>
        </div>

        <div
          className={cn(
            "relative m-6 flex flex-1 items-center justify-center",
            "rounded-[999px] border border-white/10 bg-black/50 backdrop-blur-md overflow-hidden"
          )}
        >
          <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black/40" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(255,255,255,0.45)_1px,transparent_0)] bg-size-[2px_2px]" />

          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="flex items-center gap-0 mb-8 scale-110">
              <div className="bg-[#a8a2f8] p-2 rounded-xl text-black">☁</div>
              <div className="bg-[#8b85f0] px-4 py-2 rounded-lg font-mono font-bold text-sm tracking-widest text-white">
                DEEPSHI
              </div>
            </div>

            <div className="w-full -mt-2 px-6 pb-8">
              <SlideScale />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
