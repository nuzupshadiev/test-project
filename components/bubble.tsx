type BubbleWithCloseProps = {
  onClose?: () => void;
  label?: string;
};

export default function BubbleWithClose({
  onClose,
  label = "Bubble",
}: BubbleWithCloseProps) {
  return (
    <div
      className="inline-flex items-center rounded-full p-[2px] select-none"
      style={{
        background: `conic-gradient(
          from 270deg at 50% 50%,
          #2C2C2C,
          #3D3D3D 35deg,
          #4F4F4F 80deg,
          #454545 120deg,
          #383838 170deg,
          #2E2E2E 220deg,
          #3C3C3C 290deg,
          #2C2C2C 360deg
        )`,
      }}
    >
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: "linear-gradient(180deg, #454545 0%, #3B3B3B 100%)",
        }}
      >
        <span className="text-sm text-[#B0B0B0] whitespace-nowrap">
          {label}
        </span>

        <button
          onClick={onClose}
          aria-label="Close"
          className="flex items-center justify-center w-4 h-4 rounded-full hover:bg-white/10 transition"
        >
          <span className="text-xs leading-none text-[#B0B0B0]">✕</span>
        </button>
      </div>
    </div>
  );
}
