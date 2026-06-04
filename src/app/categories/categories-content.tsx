'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/stores/language-store';
import { CATEGORIES } from '@/data/mock-categories';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CategoriesContent() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]?.id);
  const isScrollingTarget = useRef(false);

  // Implement simple scroll spy to highlight the sidebar category as you scroll
  useEffect(() => {
    const handleScroll = () => {
      // Pause scroll spy while auto-scrolling to prevent weird animation jumping
      if (isScrollingTarget.current) return;
      
      const sections = CATEGORIES.map(c => document.getElementById(`section-${c.id}`));
      let currentActive = CATEGORIES[0]?.id;
      
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section's top is near the upper middle of the viewport
          if (rect.top <= 300) {
            currentActive = section.id.replace('section-', '');
          }
        }
      }
      setActiveCategory(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    isScrollingTarget.current = true;
    setActiveCategory(id);
    
    const element = document.getElementById(`section-${id}`);
    if (element) {
      // scrollIntoView natively respects the scroll-margin-top CSS property
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Unlock scroll spy after smooth scroll finishes
    setTimeout(() => {
      isScrollingTarget.current = false;
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] pt-24 pb-20 md:pt-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Categories (Horizontal Scroll Tab Bar) */}
          <div className="lg:hidden flex overflow-x-auto pb-4 gap-2 scrollbar-hide sticky top-20 z-40 bg-[#FDFDFB]/90 backdrop-blur-md -mx-4 px-4">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-padma-green text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category.name[language]}
              </button>
            ))}
          </div>

          {/* Desktop Left Sidebar (Sticky Navigation & Accordion) */}
          <div className="hidden lg:block w-[28%] sticky top-28 h-[calc(100vh-120px)] overflow-y-auto pr-6 pb-12" style={{ scrollbarWidth: 'none' }}>
            <h2 className="font-display text-2xl font-bold text-bengal-forest mb-6">
              {language === 'en' ? 'All Categories' : 'সকল ক্যাটাগরি'}
            </h2>
            <nav className="space-y-2">
              {CATEGORIES.map((category) => {
                const IconComponent = (Icons as any)[category.icon || 'Box'];
                const isActive = activeCategory === category.id;
                
                return (
                  <div key={category.id} className="flex flex-col bg-white rounded-xl overflow-hidden border border-transparent hover:border-gray-100 shadow-sm transition-colors">
                    <button
                      onClick={() => scrollToCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 text-left transition-all duration-300 ${
                        isActive 
                          ? 'bg-mint-mist text-padma-green font-semibold' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-bengal-forest'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {IconComponent && <IconComponent className={`w-5 h-5 ${isActive ? 'text-padma-green' : 'text-gray-400'}`} />}
                        <span className="text-[15px]">{category.name[language]}</span>
                      </div>
                      <Icons.ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180 text-padma-green' : 'text-gray-300'}`} />
                    </button>
                    
                    {/* Expanding Accordion Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pt-3 pb-5 ml-[6px] border-l-2 border-gray-100/50 mb-2 mt-1">
                            <p className="text-[13px] text-gray-500 mb-4 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
                              {category.description[language]}
                            </p>
                            <ul className="space-y-2.5">
                              {category.subcategories?.map((sub, idx) => (
                                <li key={idx}>
                                  <Link 
                                    href={`/products?category=${category.id}&sub=${encodeURIComponent(sub.name.en)}`}
                                    className="text-[13px] text-gray-600 hover:text-padma-green flex items-center gap-2.5 group"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-padma-green transition-colors" />
                                    <span className="group-hover:translate-x-1 transition-transform">{sub.name[language]}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Content Area (Sub-categories Grid) */}
          <div className="w-full lg:w-[72%] space-y-16 pb-32">
            {CATEGORIES.map((category) => (
              <div key={category.id} id={`section-${category.id}`} className="scroll-mt-40">
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-bengal-forest">
                    {category.name[language]}
                  </h3>
                  <Link href={`/products?category=${category.id}`} className="text-sm font-medium text-padma-green hover:text-padma-green/80 flex items-center gap-1">
                    {language === 'en' ? 'View all' : 'সব দেখুন'} <Icons.ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-10">
                  {category.subcategories?.map((sub, idx) => {
                    return (
                      <Link 
                        key={idx} 
                        href={`/products?category=${category.id}&sub=${encodeURIComponent(sub.name.en)}`}
                        className="group flex flex-col items-center text-center space-y-4"
                      >
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-center overflow-hidden relative group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:border-padma-green/30 transition-all duration-300">
                          <img 
                            src={sub.image || category.image} 
                            alt={sub.name.en}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = category.image;
                            }}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 bg-gray-50"
                          />
                        </div>
                        <span className="text-[15px] font-medium text-gray-700 group-hover:text-padma-green transition-colors px-2">
                          {sub.name[language]}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}