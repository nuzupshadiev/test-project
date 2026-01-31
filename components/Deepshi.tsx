import SlideScale from "./Carousel";

export default function MainPage() {
  return (
    <div className="flex p-[15px] relative w-full h-full">
      <div className="absolute text-white/40">
        <div className="flex flex-row">
          <div
            className="border-[0.5px] border-white/20 rounded-xs px-[5px] text-base leading-[1.2] tracking-normal uppercase font-normal"
          >
            EVERMIND
          </div>
          <div
            className="border-[0.5px] border-white/20 px-[5px] text-base leading-[1.2] tracking-normal uppercase font-normal rounded-full"
          >
            x
          </div>
        </div>
        <div
          className="inline-block border-[0.5px] border-white/20 rounded-xs px-[5px] text-base leading-[1.2] tracking-normal uppercase font-normal rounded-tr-[12px]"
        >
          LABS.
        </div>
        <div className="mt-3 font-mono font-normal text-[6px] leading-[1.2] tracking-normal uppercase text-zinc-400/70">
          |DEEPSH| FLOW |||||
          <br />
          PREMIUM AI PRODUCT
        </div>
      </div>

      <div className="relative flex flex-1 border-[0.5px] border-white/20 rounded-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <svg
            className="h-full w-full"
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <g fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1">
              <line x1="800" y1="0" x2="1000" y2="0" />
              <line x1="800" y1="0" x2="1000" y2="120" />
              <line x1="800" y1="0" x2="1000" y2="280" />
              <line x1="800" y1="0" x2="980" y2="600" />
              <line x1="800" y1="0" x2="800" y2="600" />
              <line x1="800" y1="0" x2="600" y2="600" />
              <line x1="800" y1="0" x2="400" y2="600" />
              <line x1="800" y1="0" x2="0" y2="500" />
              <line x1="800" y1="0" x2="0" y2="300" />
              <line x1="800" y1="0" x2="0" y2="100" />
              <line x1="800" y1="0" x2="200" y2="0" />
              <line x1="800" y1="0" x2="500" y2="0" />
            </g>
          </svg>
        </div>
        <div className="relative z-10 flex-1">
          <SlideScale />
        </div>
      </div>
    </div>
  );
}
