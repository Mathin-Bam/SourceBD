'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/stores/language-store';
import { Button } from '@/components/ui/button';
import { BadgeTier } from '@/components/shared/badge-tier';
import { SUPPLIERS } from '@/data/mock-suppliers';
import { VideoBackground } from './video-background';
import {
  ArrowRight,
  Building2,
  CheckCircle,
  MapPin,
  Search,
  ChevronDown,
  Heart,
  Leaf,
  Award,
  Star,
} from 'lucide-react';

export function Hero() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedSuppliers, setLikedSuppliers] = useState<Set<string>>(new Set());
  const [isHovered, setIsHovered] = useState(false);

  // Use the first 6 suppliers for the carousel stack
  const carouselSuppliers = SUPPLIERS.slice(0, 6);
  const currentSupplier = carouselSuppliers.length > 0 ? carouselSuppliers[currentIndex % carouselSuppliers.length] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Video Background */}
      <VideoBackground />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
                <CheckCircle className="h-4 w-4" />
                {language === 'en' ? 'Bangladesh\'s Premier B2B Sourcing Platform' : 'বাংলাদেশের প্রিমিয়ার B2B উৎস প্ল্যাটফর্ম'}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                {t('home.hero.title')}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-200 max-w-xl"
            >
              {t('home.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Massive Search Bar */}
              <div className="flex w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-lg border border-white/30 p-1.5 shadow-2xl focus-within:border-white/60 focus-within:bg-white/20 transition-all duration-300">
                <div className="relative flex-shrink-0">
                  <select className="appearance-none bg-transparent text-white font-medium pl-4 pr-10 py-3 outline-none border-r border-white/20 h-full cursor-pointer hover:bg-white/5 rounded-l-md transition-colors [&>option]:text-bengal-forest">
                    <option value="products">Products</option>
                    <option value="suppliers">Suppliers</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70 pointer-events-none" />
                </div>
                <input 
                  type="text"
                  placeholder="What are you looking for..."
                  className="flex-1 bg-transparent text-white placeholder:text-white/60 px-4 py-3 outline-none min-w-0"
                />
                <Button size="lg" className="bg-loom-gold hover:bg-loom-gold/90 text-bengal-forest font-bold px-6 md:px-8 h-auto rounded-md shadow-lg shrink-0 flex items-center gap-2">
                  <Search className="h-5 w-5 hidden md:block" />
                  Search
                </Button>
              </div>

              {/* Secondary CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/suppliers">
                  <Button variant="outline" className="border border-white/30 bg-white/5 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-colors">
                    {t('home.hero.browseSuppliers')}
                  </Button>
                </Link>
                <Link href="/dashboard/buyer">
                  <Button variant="outline" className="border border-white/30 bg-white/5 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-colors">
                    {t('home.hero.postRFQ')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 3D Stacked Card Carousel */}
          <div 
            className="lg:col-span-1 relative mt-8 lg:mt-0 lg:ml-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
              className="relative w-full max-w-[420px] mx-auto lg:ml-auto cursor-pointer"
            >
              {/* Stacked Cards behind the main card (animate on hover) */}
              <motion.div 
                className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-lg translate-x-5 translate-y-5 rotate-[3.5deg] z-0 pointer-events-none"
                whileHover={{ x: 26, y: 26, rotate: 4.5 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/15 shadow-xl translate-x-2.5 translate-y-2.5 -rotate-[1.5deg] z-0 pointer-events-none"
                whileHover={{ x: 12, y: 12, rotate: -2.5 }}
                transition={{ duration: 0.4 }}
              />

              {/* Next Button (Rendered conditionally via React state) */}
              <AnimatePresence>
                {isHovered && (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleNext}
                    className="absolute right-[-16px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-black hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 40, rotateY: -10 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -40, rotateY: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 md:p-7 border border-white/50 space-y-6"
                >
                  {/* Header Profile Section */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-padma-green/10 flex items-center justify-center border border-padma-green/20">
                        <div className="w-11 h-11 rounded-full bg-padma-green/20 flex items-center justify-center font-black text-padma-green text-lg">
                          {currentSupplier?.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100 flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 fill-sky-600 text-white" />
                            Verified Supplier
                          </span>
                        </div>
                        <h3 className="font-extrabold text-xl text-bengal-forest mt-1.5 leading-tight">{currentSupplier?.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <MapPin className="h-3.5 w-3.5 text-gray-400" />
                          <span>{language === 'bn' ? currentSupplier?.nameBn : currentSupplier?.location.city}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (!currentSupplier) return;
                        setLikedSuppliers(prev => {
                          const next = new Set(prev);
                          if (next.has(currentSupplier.id)) {
                            next.delete(currentSupplier.id);
                          } else {
                            next.add(currentSupplier.id);
                          }
                          return next;
                        });
                      }}
                      className={`transition-colors p-1.5 cursor-pointer z-20 hover:scale-110 active:scale-95 ${
                        currentSupplier && likedSuppliers.has(currentSupplier.id)
                          ? 'text-rose-500' 
                          : 'text-gray-300 hover:text-rose-500'
                      }`}
                    >
                      <Heart className={`h-6 w-6 transition-all ${currentSupplier && likedSuppliers.has(currentSupplier.id) ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Sub-Header Verification Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100">
                      <Leaf className="h-3.5 w-3.5" />
                      Organic cotton / Verified
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-bold rounded-lg border border-purple-100">
                      <Award className="h-3.5 w-3.5" />
                      98% Preferred / Top Rated
                    </span>
                  </div>

                  {/* Certifications (Visual Mockup Seals) */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Certificaties</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="border border-gray-200 rounded-lg p-2 bg-gray-50 flex flex-col justify-center items-center leading-none text-center shadow-xs">
                        <span className="text-[9px] font-black text-gray-800 tracking-tighter">OEKO-TEX®</span>
                        <span className="text-[6px] text-gray-400 mt-0.5">STANDARD 100</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-emerald-800 text-white flex items-center justify-center font-extrabold text-[8px] border border-emerald-900 shadow-sm leading-none" title="GOTS Certified">
                        GOTS
                      </div>
                      <div className="border border-gray-200 rounded-lg px-2.5 py-1.5 bg-gray-50 text-[10px] font-black text-gray-700 shadow-xs">
                        ISO 9001
                      </div>
                      <div className="border border-gray-200 rounded-lg px-2.5 py-1.5 bg-gray-50 text-[10px] font-black text-red-800 shadow-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                        BSCI
                      </div>
                    </div>
                  </div>

                  {/* Bottom Performance Tags */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 px-3 py-2 bg-amber-500 text-white text-xs font-bold rounded-xl shadow-sm">
                      <Star className="h-3.5 w-3.5 fill-white text-amber-500" />
                      30+ Years Experience
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-2 bg-teal-600 text-white text-xs font-bold rounded-xl shadow-sm">
                      <Building2 className="h-3.5 w-3.5 text-white" />
                      100% Export Oriented
                    </span>
                  </div>

                  {/* View Profile Direct CTA */}
                  <Link href={`/suppliers/${currentSupplier?.id}`} className="block pt-2">
                    <Button className="w-full bg-bengal-forest hover:bg-bengal-forest/90 text-white font-bold py-5 rounded-xl transition-all duration-200 shadow-lg relative z-20">
                      {t('common.viewProfile')}
                    </Button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}