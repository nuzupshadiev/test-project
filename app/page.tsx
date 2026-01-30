import GlassMain from "@/components/Deepshi";
import CommandInput from "@/components/InputText";
import { ModeSwitch } from "@/components/ModeSwitch";

export default function Home() {
  return (
    <div className="flex bg-black min-h-screen w-screen overflow-hidden">
      <div className="flex flex-col w-[40%] min-w-0 p-6 justify-between">
        <ModeSwitch />
        <CommandInput />
      </div>
      <div className="flex flex-1 min-w-0">
        <GlassMain />
      </div>
    </div>
  );
}
