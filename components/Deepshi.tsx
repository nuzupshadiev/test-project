import SlideScale from "./Carousel";

export default function MainPage() {
  return (
    <div className="flex p-[15px] relative w-full h-full">
      <div className="absolute text-white/40">
        <div className="flex flex-row">
          <div
            className={`
                border-[0.5px] border-white/20 rounded-xs px-[5px]
                text-base leading-[1.2] tracking-normal uppercase font-normal`}
          >
            EVERMIND
          </div>
          <div
            className={`
                border-[0.5px] border-white/20 px-[5px]
                text-base leading-[1.2] tracking-normal uppercase font-normal rounded-full`}
          >
            x
          </div>
        </div>
        <div
          className={`
                inline-block border-[0.5px] border-white/20 rounded-xs px-[5px]
                text-base leading-[1.2] tracking-normal uppercase font-normal rounded-tr-[12px]`}
        >
          LABS.
        </div>
        <div
          className="
    mt-3
    font-mono
    font-normal
    text-[6px]
    leading-[1.2]
    tracking-normal
    uppercase
    text-zinc-400/70
  "
          style={{ fontFamily: "Geist Mono" }}
        >
          |DEEPSH| FLOW |||||
          <br />
          PREMIUM AI PRODUCT
        </div>
      </div>

      <div className="flex flex-1 border-[0.5px]  border-white/20 rounded-full overflow-hidden">
        <SlideScale />
      </div>
    </div>
  );
}
