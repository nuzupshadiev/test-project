import MainPage from "@/components/Deepshi";
import EvermindDashboard from "@/components/EvermindProcess";
import CommandInput from "@/components/InputText";
import { ModeSwitch } from "@/components/ModeSwitch";
export default function Home() {
  return (
    <div className="flex flex-col bg-black min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row w-full overflow-hidden">
        <div className="flex flex-col w-full md:flex-[0_1_585px] md:w-auto h-auto md:h-[598px] p-[15px] gap-8 md:gap-0 md:justify-between border-[0.5px] border-white/20 overflow-hidden">
        <ModeSwitch />
        <CommandInput />
        </div>
        <div className="flex w-full md:flex-1 md:min-w-[420px] h-auto md:h-[598px] border-[0.5px] border-white/20 border-l-0 overflow-hidden">
          <MainPage />
        </div>
      </div>
      <div className="w-full">
        <EvermindDashboard />
      </div>
    </div>
  );
}
