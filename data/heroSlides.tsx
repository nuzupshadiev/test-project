import Image from "next/image";

export const slides = [
  {
    headline: "We Say What Other AI's Won't.",
    sub: "Your Private Uncensored Intelligence",
    image: "/deepshi-ui.png",
  },
  {
    headline: "Zero Ideology. Pure Intelligence.",
    sub: "Answers without filters",
    image: "/deepshi-ui.png",
  },
  {
    headline: "Think Freely. Speak Boldly.",
    sub: "Unrestricted AI conversations",
    image: "/deepshi-ui.png",
  },
];

export const MODES = ["Try Deepshi", "Try Deepshi Flow", "Try Deepshi Forge"];

const previewImage = (
  <Image
    src="/image.png"
    alt="Deepshi UI preview"
    width={320}
    height={200}
    className="h-76 w-106 object-cover"
  />
);

export const SLIDES = [
  {
    title: "We Say What Other AI's Won't.",
    subtitle: "Your Private Uncensored Intelligence",
    bottomRight: previewImage,
  },
  {
    title: "Truthful answers, zero filters.",
    subtitle: "Your private, secure intelligence engine",
    bottomRight: previewImage,
  },
  {
    title: "Your private operator for the web.",
    subtitle: "Concise, fast, and opinionated",
    bottomRight: previewImage,
  },
  {
    title: "See, hear, and reason in one flow.",
    subtitle: "Built for real-time insight",
    bottomRight: previewImage,
  },
  {
    title: "Focus on signal, not noise.",
    subtitle: "Clarity-first AI workflows",
    bottomRight: previewImage,
  },
];
