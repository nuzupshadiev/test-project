import MainPage from "@/components/Deepshi";
import CommandInput from "@/components/InputText";
import { ModeSwitch } from "@/components/ModeSwitch";

export default function Home() {
  return (
    <div className="flex flex-row bg-black min-h-screen w-screen overflow-hidden">
      <div className="flex flex-col w-[585px] h-[598px]  p-[15px] justify-between border-[0.5px] border-white/20 overflow-hidden">
        <ModeSwitch />
        <CommandInput />
      </div>
      <div className="flex flex-1 h-[598px] border-[0.5px] border-white/20 overflow-hidden">
        <MainPage />
      </div>
    </div>
  );
}
