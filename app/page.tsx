import MainPage from "@/components/Deepshi";
import GradientBox from "@/components/gradient";
import CommandInput from "@/components/InputText";
import { ModeSwitch } from "@/components/ModeSwitch";
import GradientBar from "@/components/textureFrame";
import Frame2095586328 from "@/components/textureFrame";
import FigmaFrame from "@/components/textureFrame";
export default function Home() {
  return (
    <div className="flex flex-row bg-black min-h-screen w-screen overflow-hidden">
      <div className="flex flex-col w-[585px] h-[598px]  p-[15px] justify-between border-[0.5px] border-white/20 overflow-hidden ">
        <ModeSwitch />
        <CommandInput />
        {/* <FigmaFrame/> */}
        {/* <GradientBar /> */}
      </div>
      <div className="flex flex-1 h-[598px] border-[0.5px] border-white/20 overflow-hidden">
        <MainPage />
      </div>
    </div>
  );
}
