"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SLIDES } from "@/data/heroSlides";

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
    return 0.75;
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="py-8">
          {SLIDES.map((slide, index) => {
            const isActive = index === current;

            return (
              <CarouselItem
                key={slide.title}
                className={cn(
                  "basis-[72%] relative",
                  isActive ? "z-10" : "z-0"
                )}
              >
                <Card
                  className="relative aspect-16/10 transition-all duration-500 border-white/10 bg-zinc-900/60 backdrop-blur-xl p-0 m-0 gap-0"
                  style={{
                    transform: `scale(${getScale(index)})`,
                    opacity: isActive ? 1 : 0.45,
                    filter: isActive ? "brightness(1)" : "brightness(0.8)",
                  }}
                >
                  <CardContent className="relative h-full p-0 m-0 flex flex-col justify-between text-white rounded-2xl">
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-200">
                        {slide.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-zinc-500">
                        {slide.subtitle}
                      </p>
                    </div>
                    {slide.bottomRight && (
                      <div className="absolute bottom-0 right-0">
                        {slide.bottomRight}
                      </div>
                    )}
                  </CardContent>

                  {isActive && (
                    <button
                      onClick={() => api?.scrollNext()}
                      className="absolute right-[-28px] top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-xl bg-white text-black shadow-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
                      type="button"
                      aria-label="Next slide"
                    >
                      →
                    </button>
                  )}
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="mt-4 flex justify-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all cursor-pointer",
              index === current
                ? "bg-white scale-110"
                : "bg-white/30 hover:bg-white/50"
            )}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
