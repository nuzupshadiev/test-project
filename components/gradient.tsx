type GradientBoxProps = {
  className?: string;
};

export default function GradientBox({ className }: GradientBoxProps) {
  return (
    <div
      className={[
        "bg-[radial-gradient(circle_at_bottom_right,#2B00FF_0%,rgba(123,45,255,0.75)_35%,rgba(255,120,200,0.35)_60%,rgba(255,120,200,0)_80%)]",
        className ?? "",
      ].join(" ")}
    />
  );
}
