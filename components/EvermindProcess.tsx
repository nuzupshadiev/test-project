"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, Scale, SlidersHorizontal, Zap } from "lucide-react";

import { Card } from "@/components/ui/card";

const FEATURES = [
  {
    id: "private_sessions",
    title: "Private Sessions",
    Icon: Eye,
    description:
      "// If you don’t feel safe thinking freely, the tool fails. That’s why Evermind removes that fear, friction, and second-guessing from the thinking process.",
    status: "[statuse:canceled_chats]",
  },
  {
    id: "direct_responses",
    title: "Direct Responses",
    Icon: Zap,
    description:
      "// If you don’t feel safe thinking freely, the tool fails. That’s why Evermind removes that fear, friction, and second-guessing from the thinking process.",
    status: "[statuse:no_filtering]",
  },
  {
    id: "neutral_reasoning",
    title: "Neutral Reasoning",
    Icon: Scale,
    description:
      "// If you don’t feel safe thinking freely, the tool fails. That’s why Evermind removes that fear, friction, and second-guessing from the thinking process.",
    status: "[statuse:no_training]",
  },
  {
    id: "user_control",
    title: "User Control",
    Icon: SlidersHorizontal,
    description:
      "// If you don’t feel safe thinking freely, the tool fails. That’s why Evermind removes that fear, friction, and second-guessing from the thinking process.",
    status: "[statuse:ownership]"
  },
] as const;

type FeatureId = (typeof FEATURES)[number]["id"];

const DEFAULT_FEATURE: FeatureId = "private_sessions";

export default function EvermindDashboard() {
  const [activeTab, setActiveTab] = useState<FeatureId>(DEFAULT_FEATURE);
  const activeFeature = FEATURES.find((feature) => feature.id === activeTab) ?? FEATURES[0];

  return (
    <div className="w-full max-w-full h-full overflow-x-hidden bg-[#0a0a0a] text-[#a0a0a0] px-3 py-4 sm:px-4 md:p-[15px] font-mono uppercase text-[10px] sm:text-xs tracking-widest">
      <div className="flex flex-col gap-2 border-b border-zinc-800 pb-2 mb-8 sm:mb-10 md:mb-12 opacity-50 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <span>EVERMIND PROCESS</span>
          <span className="text-zinc-600">|</span>
          <span>LABS: 4 PROJECTS</span>
        </div>
        <div>CREATED FOR: FREE THOUGHT</div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-full mx-auto items-start min-w-0">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-[585px] shrink-0 min-w-0">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              onMouseEnter={() => setActiveTab(feature.id)}
              className="relative cursor-pointer"
            >
              <AnimatePresence>
                {activeTab === feature.id && (
                  <motion.div
                    layoutId="outline"
                    className="absolute -inset-1 sm:-inset-2 border border-[#DB2B89] rounded-lg z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>

              <Card
                className={`relative z-10 h-40 sm:h-48 lg:h-64 bg-zinc-900/40 border-zinc-800 p-3 sm:p-4 lg:p-6 flex flex-col justify-between transition-colors duration-300 ${
                  activeTab === feature.id ? "bg-zinc-900/80 border-zinc-700" : ""
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3
                    className={`text-xs sm:text-sm ${
                      activeTab === feature.id ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  {activeTab === feature.id && (
                    <div className="bg-[#ff3399] text-black px-1 text-[9px] sm:text-[10px]">
                      ACTIVE
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex items-center justify-center opacity-40">
                  <div className="w-full h-16 sm:h-20 lg:h-24 border-zinc-800 border-dashed border flex items-center justify-center">
                    <span className="text-[9px] sm:text-[10px] text-zinc-700">[ VISUAL_DATA_STREAM ]</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="relative flex flex-col justify-center items-center min-h-[360px] sm:min-h-[420px] lg:min-h-[500px] w-full flex-1 lg:min-w-[420px] min-w-0">
          <div className="absolute inset-0 border border-zinc-800 rounded-full opacity-20 scale-95" />
          <div className="absolute inset-0 border border-zinc-800 rounded-full opacity-10 scale-75" />
          
          <div className="relative z-10 max-w-md space-y-5 sm:space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-8">
            <motion.div
              key={`${activeTab}-header`}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-[#ff3399] text-black px-3 py-1 font-bold text-[11px] sm:text-xs"
            >
              <activeFeature.Icon className="w-5 h-5" />
              <span>{activeFeature.title}</span>
            </motion.div>

            <motion.p
              key={`${activeTab}-desc`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-300 tracking-normal normal-case font-sans"
            >
              {activeFeature.description.toUpperCase()}
            </motion.p>

            <motion.div
              key={`${activeTab}-status`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#ff3399] font-bold"
            >
              {activeFeature.status}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}