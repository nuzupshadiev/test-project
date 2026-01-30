import { cn } from "@/lib/utils";
import SlideScale from "./Carousel";

export default function GlassMain() {
  return (
    <div className="relative flex h-full w-full min-h-0 min-w-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(136,120,255,0.18),transparent_45%),radial-gradient(circle_at_70%_65%,rgba(120,240,255,0.12),transparent_55%)]" />
        <div className="absolute -top-24 -left-32 h-[700px] w-[700px] rounded-full border border-white/5 rotate-6" />
        <div className="absolute -top-52 left-12 h-[900px] w-[900px] rounded-full border border-white/5 -rotate-3" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(rgba(255,255,255,0.35)_1px,transparent_0)] bg-size-[3px_3px]" />
      </div>

      <div className="relative z-10 flex w-full min-w-0">
        <div className="absolute left-10 top-10 flex flex-col items-start text-zinc-300/80">
          <div className="flex items-center gap">
            <div className="flex flex-col gap font-mono">
              <div className="flex flex-row"> 
                <div className="border border-white/20 rounded-md px-2 py-1 text-sm tracking-[0.18em]">
                  EVERMIND
                </div>
                <div className="border border-white/20 rounded-full px-3 py-2">
              <div className="w-4 h-4 flex items-center justify-center border border-white/30 rounded-full text-xs">
                ✶
              </div>
            </div>
              </div>
              <div className="w-fit self-start border border-white/20 rounded-md px-2 py-1 text-sm tracking-[0.18em] rounded-tr-[30px]">
                LABS.
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
            "relative m-6 flex flex-1 min-w-0 items-center justify-center",
            "rounded-[999px] border border-white/10 bg-black/50 backdrop-blur-md overflow-hidden"
          )}
        >
          <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black/40" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(255,255,255,0.45)_1px,transparent_0)] bg-size-[2px_2px]" />

          <div className="relative z-10 flex w-full min-w-0 flex-col items-center">
            <div className="mb-8 flex items-center scale-105 cursor-pointer">
              <div className="rounded-full bg-[#9775DE] px-5 py-3.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3 w-3 text-white/90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 18h10a4 4 0 0 0 .2-8 6 6 0 0 0-11.8 1.7A3.5 3.5 0 0 0 7 18Z" />
                </svg>
              </div>
              <div className="rounded-md bg-[#9775DE] px-3 py-1.5 font-mono text-xl tracking-[0.28em] text-white/90">
                DEEPSHI
              </div>
            </div>

            <div className="w-full min-w-0 -mt-2 px-6 pb-8">
              <SlideScale />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
