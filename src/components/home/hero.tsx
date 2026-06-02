'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/stores/language-store';
import { Button } from '@/components/ui/button';
import { VideoBackground } from './video-background';
import {
  ArrowRight,
  Building2,
  CheckCircle,
  MapPin,
  Search,
  Heart,
  Leaf,
  Award,
  Star,
} from 'lucide-react';

export function Hero() {
  const { language, t } = useLanguage();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/suppliers?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/suppliers');
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[750px] md:min-h-[850px] flex items-center pt-28 md:pt-36 pb-16 md:pb-24 lg:pb-32">
      {/* Video Background */}
      <VideoBackground />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/20 shadow-md">
                <CheckCircle className="h-4 w-4 text-loom-gold fill-loom-gold/10" />
                {language === 'en' ? 'Bangladesh\'s Premier B2B Sourcing Platform' : 'বাংলাদেশের প্রিমিয়ার B2B উৎস প্ল্যাটফর্ম'}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight drop-shadow-md">
                Source Directly from <br className="hidden md:inline" />
                Bangladesh's Top <br className="hidden md:inline" />
                Manufacturers
              </h1>
            </motion.div>

            {/* Glassmorphic Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <form onSubmit={handleSearch} className="w-full max-w-2xl">
                <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-4 shadow-2xl focus-within:ring-2 focus-within:ring-padma-green/60 transition-all duration-300">
                  <Search className="h-6 w-6 text-white/80 flex-shrink-0" />
                  <input
                    id="hero-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === 'bn' ? 'সরবরাহকারী বা কাঁচামাল অনুসন্ধান করুন...' : 'Search a supplier for input/manufacturers'}
                    className="w-full bg-transparent text-white placeholder-white/60 focus:outline-none ml-4 text-base md:text-lg py-0.5 border-0 focus:ring-0"
                  />
                </div>
              </form>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <Link href="/suppliers">
                <Button size="lg" className="bg-padma-green hover:bg-padma-green/90 text-white font-bold shadow-lg px-8 py-6.5 text-base rounded-xl transition-all duration-200">
                  {t('home.hero.browseSuppliers')}
                </Button>
              </Link>
              <Link href="/dashboard/buyer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 bg-white/5 hover:bg-white/15 text-white font-bold px-8 py-6.5 text-base rounded-xl transition-all duration-200"
                >
                  {t('home.hero.postRFQ')}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - 3D Stacked Card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-[420px] mx-auto lg:ml-auto"
            >
              {/* Stacked Cards behind the main card */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-lg translate-x-5 translate-y-5 rotate-[3.5deg] z-0 pointer-events-none" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/15 shadow-xl translate-x-2.5 translate-y-2.5 -rotate-[1.5deg] z-0 pointer-events-none" />

              {/* Main Card */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 md:p-7 border border-white/50 space-y-6">
                {/* Header Profile Section */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-padma-green/10 flex items-center justify-center border border-padma-green/20">
                      <div className="w-11 h-11 rounded-full bg-padma-green/20 flex items-center justify-center font-black text-padma-green text-lg">
                        A
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100 flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 fill-sky-600 text-white" />
                          Verified Supplier
                        </span>
                      </div>
                      <h3 className="font-extrabold text-xl text-bengal-forest mt-1.5 leading-tight">Apex Textiles Ltd.</h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin className="h-3.5 w-3.5 text-gray-400" />
                        <span>Gazipur, Dhaka</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-300 hover:text-rose-500 transition-colors p-1.5 cursor-pointer">
                    <Heart className="h-6 w-6" />
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
                    {/* OEKO-TEX Mockup */}
                    <div className="border border-gray-200 rounded-lg p-2 bg-gray-50 flex flex-col justify-center items-center leading-none text-center shadow-xs">
                      <span className="text-[9px] font-black text-gray-800 tracking-tighter">OEKO-TEX®</span>
                      <span className="text-[6px] text-gray-400 mt-0.5">STANDARD 100</span>
                    </div>

                    {/* GOTS Circle Seal Mockup */}
                    <div className="w-9 h-9 rounded-full bg-emerald-800 text-white flex items-center justify-center font-extrabold text-[8px] border border-emerald-900 shadow-sm leading-none" title="GOTS Certified">
                      GOTS
                    </div>

                    {/* ISO Rect */}
                    <div className="border border-gray-200 rounded-lg px-2.5 py-1.5 bg-gray-50 text-[10px] font-black text-gray-700 shadow-xs">
                      ISO 9001
                    </div>

                    {/* BSCI Seal */}
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
                <Link href="/suppliers/sup-001" className="block pt-2">
                  <Button className="w-full bg-bengal-forest hover:bg-bengal-forest/90 text-white font-bold py-5.5 rounded-xl transition-all duration-200 shadow-lg">
                    {t('common.viewProfile')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Green Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="w-14 h-14 bg-padma-green hover:bg-padma-green/95 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white/20 animate-bounce-subtle"
          aria-label="Contact support"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white text-padma-green">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </button>
      </div>
    </section>
  );
}