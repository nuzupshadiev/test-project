"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SLIDES } from "@/data/heroSlides";
import nextIcon from "@/data/next_icon.svg";
import { CloudIcon } from "lucide-react";

export default function SlideScale() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      const snap = api.selectedScrollSnap();
      setCurrent(snap % SLIDES.length);
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  const getScale = (index: number) => {
    const total = SLIDES.length;
    const diff = Math.abs(index - current);
    const distance = Math.min(diff, total - diff);

    if (distance === 0) return 1;
    if (distance === 1) return 0.9;
    return 0.8;
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Carousel
        className="w-full max-w-6xl"
        opts={{ loop: true }}
        setApi={setApi}
      >
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center">
            <span className="flex h-[25px] w-[40px] items-center justify-center rounded-[25px] bg-[#9775DE] px-[8px] pt-[7px] pb-[8px] opacity-100">
              <CloudIcon size={14} color="white" />
            </span>
            <span className="flex h-[25px] w-[84px] items-center justify-center rounded-[5px] bg-[#9775DE] px-[8px] pt-[3px] pb-[3px] text-xs font-medium uppercase text-white opacity-100">
              Deepshi
            </span>
          </div>
        </div>
        <CarouselContent className="pt-[60px] pb-8 items-center">
          {SLIDES.map((slide, index) => {
            const isActive = index === current;

            return (
              <CarouselItem
                key={slide.title}
                className={cn(
                  "basis-[90%] md:basis-[75%] lg:basis-[65%] relative flex items-center justify-center",
                  isActive ? "z-10" : "z-0"
                )}
              >
                <div className="relative w-full">
                  <Card
                    className="relative w-full aspect-video rounded-sm border border-white/10 shadow-none bg-zinc-900/60 backdrop-blur transition-[transform,opacity] duration-500 py-0 gap-0"
                    style={{
                      transform: `scale(${getScale(index)})`,
                      opacity: isActive ? 1 : 0.45,
                    }}
                  >
                    <CardContent
                      className="relative h-full p-0 m-0 text-white overflow-hidden backdrop-blur-[20px]"
                      style={{
                        boxShadow:
                          "0px 19px 41px 0px #0000001A, 0px 75px 75px 0px #00000017, 0px 169px 101px 0px #0000000D, 0px 300px 120px 0px #00000003",
                      }}
                    >
                    <div className="absolute top-5 left-5 w-[307px] h-[44px] font-['Geist'] text-[16px] leading-[1.4] font-normal tracking-[0] text-[#B0B0B0]">
                      <h3>{slide.title}</h3>
                      <p>{slide.subtitle}</p>
                    </div>
                      {slide.bottomRight && (
                       <div className="absolute bottom-0 right-0 w-[92%] max-w-none translate-x-4 translate-y-4 rotate-[-8deg] origin-bottom-right sm:w-[80%] sm:max-w-[560px] sm:translate-x-6 sm:translate-y-6 md:w-[72%] md:max-w-[600px] md:translate-x-8 md:translate-y-8 lg:w-[65%] lg:max-w-[640px]">
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                          {slide.bottomRight}
                        </div>
                      </div>
                    )}
                    </CardContent>

                    {isActive && (
                      <button
                        onClick={() => api?.scrollNext()}
                        className="absolute right-[-20px] top-[33%] -translate-y-1/2 z-20 h-10 w-10 rounded-sm bg-white text-black shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                        type="button"
                        aria-label="Next slide"
                      >
                        <Image
                          src={nextIcon}
                          alt=""
                          width={20}
                          height={13}
                          className="h-[13px] w-[20px]"
                        />
                      </button>
                    )}
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="mt-4 flex justify-center gap-[5px]">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-1 w-1 rounded-full transition-all cursor-pointer bg-white/35",
              index === current
                ? "w-4 bg-white"
                : "hover:bg-white/50"
            )}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
