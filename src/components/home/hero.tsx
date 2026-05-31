'use client';

import { motion } from 'framer-motion';
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
} from 'lucide-react';

export function Hero() {
  const { language, t } = useLanguage();

  const featuredSupplier = SUPPLIERS.find(s => s.tier === 'Platinum' && s.featured);

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
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
              className="flex flex-wrap gap-4"
            >
              <Link href="/suppliers">
                <Button size="lg" className="bg-loom-gold hover:bg-loom-gold/90 text-bengal-forest font-semibold shadow-lg">
                  {t('home.hero.browseSuppliers')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard/buyer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-bengal-forest font-semibold"
                >
                  {t('home.hero.postRFQ')}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Featured Supplier Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-padma-green/20 to-loom-gold/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-mint-mist flex items-center justify-center">
                    <Building2 className="h-7 w-7 text-padma-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-bengal-forest">{featuredSupplier?.name}</h3>
                    <p className="text-sm text-gray-500">{language === 'bn' ? featuredSupplier?.nameBn : featuredSupplier?.location.city}</p>
                  </div>
                </div>
                <BadgeTier tier={featuredSupplier?.tier || 'Verified'} animated />
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">
                {language === 'en' ? featuredSupplier?.description.en : featuredSupplier?.description.bn}
              </p>

              <div className="flex flex-wrap gap-2">
                {featuredSupplier?.certifications.slice(0, 3).map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {cert}
                  </span>
                ))}
                {(featuredSupplier?.certifications.length || 0) > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                    +{(featuredSupplier?.certifications.length || 0) - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t">
                <div className="flex items-center gap-1 text-sm">
                  <MapPin className="h-4 w-4 text-padma-green" />
                  <span>{featuredSupplier?.location.city}</span>
                </div>
                <div className="text-sm">
                  <span className="text-padma-green font-semibold">{featuredSupplier?.rating}</span>
                  <span className="text-gray-400">/5</span>
                </div>
                <div className="text-sm">
                  <span className="text-padma-green font-semibold">{featuredSupplier?.responseRate}%</span>
                  <span className="text-gray-400"> response</span>
                </div>
              </div>

              <Link href={`/suppliers/${featuredSupplier?.id}`}>
                <Button className="w-full bg-bengal-forest hover:bg-bengal-forest/90 font-medium">
                  {t('common.viewProfile')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}