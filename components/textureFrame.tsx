export default function GlassGradient() {
  return (
    <div
      className="
        absolute
        top-0
        left-[-233px]
        pointer-events-none
        rounded-[4.33px]
        backdrop-blur-[10.83px]
      "
      style={{
        width: "192.00001525879068px",
        height: "855px",
        background: `
          linear-gradient(
            90deg,
            rgba(74, 71, 76, 0.2) 2.15%,
            rgba(149, 143, 152, 0.2) 4.31%,
            rgba(197, 198, 201, 0.2) 6.62%,
            rgba(85, 83, 86, 0.2) 10.16%,
            rgba(32, 28, 31, 0.2) 17.16%,
            rgba(49, 47, 50, 0.2) 42.1%,
            rgba(37, 37, 37, 0.2) 68.25%,
            rgba(37, 37, 37, 0.2) 82.17%,
            rgba(37, 37, 37, 0.2) 87.35%,
            rgba(255, 255, 255, 0.12) 93.31%,
            rgba(37, 35, 36, 0.2) 96.01%,
            rgba(0, 0, 0, 0.2) 100%
          )
        `,
        transform: "rotate(-90deg)",
        opacity: 1,
      }}
    />
  );
}
