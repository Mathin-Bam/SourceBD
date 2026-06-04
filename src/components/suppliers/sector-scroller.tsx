"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/data/mock-categories";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/stores/language-store";

interface SectorScrollerProps {
  selectedCategory: string;
  onSelect: (id: string) => void;
}

export function SectorScroller({ selectedCategory, onSelect }: SectorScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  return (
    <div className="w-full relative py-6 bg-[#FDFDFB]">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-6 sm:px-8 pb-4 pt-2 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}} />
        
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;

          return (
            <motion.button
              key={category.id}
              onClick={() => onSelect(category.id)}
              whileHover={{ y: -4 }}
              className={cn(
                "relative flex-shrink-0 w-32 h-20 rounded-sm overflow-hidden snap-start group",
                "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isSelected 
                  ? "border-b-2 border-jute-gold shadow-[0_32px_64px_-16px_rgba(10,54,34,0.08)]" 
                  : "shadow-[0_1px_3px_rgba(10,54,34,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(10,54,34,0.08)]"
              )}
            >
              <motion.div
                className="absolute inset-0 w-full h-full origin-center"
                initial={false}
                animate={{ scale: isSelected ? 1.08 : 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={category.image}
                  alt={category.name.en}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3622]/90 via-[#0A3622]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              
              <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                <span className={cn(
                  "text-sm font-semibold leading-tight drop-shadow-md line-clamp-2",
                  isSelected ? "text-jute-gold" : "text-[#FDFDFB]"
                )}>
                  {language === 'bn' ? category.name.bn : category.name.en}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
