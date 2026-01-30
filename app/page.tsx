import GlassMain from "@/components/Deepshi";
import CommandInput from "@/components/InputText";
import { ModeSwitch } from "@/components/ModeSwitch";

export default function Home() {
  return (
    <div className="flex bg-black h-screen">
      <div className="flex flex-col max-w-40% p-6 justify-between ">
        <ModeSwitch />
        <CommandInput />
      </div>
      <div className="flex flex-1">
        <GlassMain />
      </div>
    </div>
  );
}
