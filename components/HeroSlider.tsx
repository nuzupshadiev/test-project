"use client";

import React, { useState } from "react";
import { ArrowRight, Cloud, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slides } from "@/data/heroSlides";

const DeepshiPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getSlideIndex = (offset: number) => {
    const index = selectedIndex + offset;
    if (index < 0) return slides.length - 1;
    if (index >= slides.length) return 0;
    return index;
  };

  const scrollNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const scrollTo = (index: number) => {
    if (isAnimating || index === selectedIndex) return;
    setIsAnimating(true);
    setSelectedIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const renderCard = (slideIndex: number, position: 'left' | 'center' | 'right') => {
    const slide = slides[slideIndex];
    const isGhost = position !== 'center';
    
    return (
      <div
        key={`${slideIndex}-${position}`}
        className={`absolute transition-all duration-600ms ease-in-out ${
          position === 'left'
            ? 'left-0 lg:-left-40 w-full lg:w-80 opacity-0 lg:opacity-20 -rotate-2 scale-90 lg:scale-100 z-10 pointer-events-none'
            : position === 'center'
            ? 'left-1/2 -translate-x-1/2 w-full max-w-[850px] opacity-100 rotate-0 scale-100 z-20'
            : 'right-0 lg:-right-40 w-full lg:w-80 opacity-0 lg:opacity-20 rotate-2 scale-90 lg:scale-100 z-10 pointer-events-none'
        } ${isGhost ? 'h-[400px]' : 'aspect-16/10'}`}
        style={{
          transitionProperty: 'transform, opacity, scale',
        }}
      >
        <div className={`w-full ${isGhost ? 'h-full' : 'aspect-16/10'} bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col ${isGhost ? 'bg-zinc-900' : ''}`}>
          <div className={`${isGhost ? 'p-5' : 'p-6 pb-2'}`}>
            <h1 className={`${isGhost ? 'text-xs' : 'text-base md:text-lg'} font-medium tracking-tight text-zinc-200 mb-1`}>
              {slide.headline.replace(/'/g, "\u2019")}
            </h1>
            <p className={`${isGhost ? 'text-xs' : 'text-base md:text-lg'} text-zinc-200 font-light`}>
              {slide.sub}
            </p>
          </div>

          {!isGhost && (
            <div className="mt-auto mx-12 h-2/3 bg-zinc-950 rounded-t-2xl border-x border-t border-white/10 p-4 flex gap-4 overflow-hidden translate-y-4">
              <div className="w-1/3 border-r border-white/5 space-y-4">
                <div className="h-4 w-24 bg-white/10 rounded" />
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-full bg-white/5 rounded" />
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="h-10 w-full bg-white/5 rounded-full border border-white/10 mb-8" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-1 relative bg-black text-white font-sans selection:bg-purple-500/30">
      {/* Header / Logo */}
      <header className="absolute top-8 left-8 z-20">
        <div className="flex items-center">
          <div className="border border-white/40 px-2 py-0.5 text-xl tracking-tighter rounded-sm">
            EVERMIND
          </div>
          <div className="border border-white/40 rounded-full p-1 text-xl">
            <Sparkles size={12} />
          </div>
        </div>
        <div className="border border-white/40 px-2 py-0.5 text-xl rounded-sm">
          Labs.
        </div>
        <div className="mt-8">
          <p className="text-[10px] tracking-[0.15em] opacity-40 font-mono">
            |DEEPSHI FLOW ||||
          </p>
          <p className="text-[9px] tracking-widest opacity-30 uppercase">
            Premium AI Product
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full m-6 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden">
        {/* Deepshi Badge */}
        <div className="flex items-center gap-0 mb-8 scale-110">
          <div className="bg-[#a8a2f8] p-2 rounded-xl text-black">
            <Cloud size={20} fill="currentColor" />
          </div>
          <div className="bg-[#8b85f0] px-4 py-2 rounded-lg font-mono font-bold text-sm tracking-widest text-white">
            DEEPSHI
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center w-full max-w-4xl h-[500px] lg:h-[600px]">
          {/* Three Card Carousel */}
          <div className="relative w-full h-full">
            {/* Left Ghost Card */}
            {renderCard(getSlideIndex(-1), 'left')}
            
            {/* Main Card */}
            {renderCard(selectedIndex, 'center')}
            
            {/* Right Ghost Card */}
            {renderCard(getSlideIndex(1), 'right')}

            {/* Next Button - positioned on top of main slide */}
            <Button
              variant="ghost"
              size="icon-lg"
              onClick={scrollNext}
              type="button"
              disabled={isAnimating}
              className="absolute left-1/2 top-30 translate-x-[400px] max-lg:translate-x-[calc(50vw-2rem)] w-13 h-13 bg-zinc-200 rounded-sm text-black hover:bg-white transition-all shadow-xl z-30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-3 mt-12 items-center z-20 relative">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              type="button"
              className={`transition-all rounded-full cursor-pointer relative ${
                index === selectedIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-zinc-700 hover:bg-zinc-600"
              }`}
              style={{ minWidth: '8px', minHeight: '8px' }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </main>

    </div>
  );
};

export default DeepshiPage;
