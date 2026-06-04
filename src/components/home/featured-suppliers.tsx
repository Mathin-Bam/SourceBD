'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/stores/language-store';
import { FEATURED_SUPPLIERS } from '@/data/mock-suppliers';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { BadgeTier } from '@/components/shared/badge-tier';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Users,
  Star,
  Building2,
  ArrowRight,
} from 'lucide-react';

export function FeaturedSuppliers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-padma-green mb-4 block">
              Verified Partners
            </span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-bengal-forest mb-2">
              {t('home.featuredSuppliers.title')}
            </h2>
            <p className="text-lg text-gray-500">
              {t('home.featuredSuppliers.subtitle')}
            </p>
          </div>
          <Link href="/suppliers" className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-padma-green hover:text-sundarban-green transition-colors duration-500">
              {t('common.viewAll')}
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_SUPPLIERS.slice(0, 4).map((supplier, index) => (
            <StaggerItem key={supplier.id} index={index}>
              <Link href={`/suppliers/${supplier.id}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-sm p-8 h-full flex flex-col shadow-[0_1px_3px_rgba(10,54,34,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(10,54,34,0.08)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#F8F9FA] flex items-center justify-center overflow-hidden border border-gray-100">
                      <img src={supplier.logo || `https://ui-avatars.com/api/?name=${encodeURIComponent(supplier.name)}&background=0A3622&color=fff&size=128&font-size=0.4`} alt={supplier.name} className="w-full h-full object-cover" />
                    </div>
                    <BadgeTier tier={supplier.tier} size="sm" animated />
                  </div>

                  {/* Name */}
                  <h3 className="font-display tracking-tight text-xl text-bengal-forest group-hover:text-sundarban-green transition-colors duration-500 mb-1">
                    {language === 'bn' && supplier.nameBn ? supplier.nameBn : supplier.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <MapPin className="h-3 w-3 text-gray-400" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
                      {supplier.location.city}, {supplier.location.division}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2 flex-1">
                    {language === 'en' ? supplier.description.en.slice(0, 100) : supplier.description.bn.slice(0, 80)}...
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-gray-300" />
                      <span className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
                        {supplier.employees.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 text-jute-gold fill-jute-gold" />
                      <span className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
                        {supplier.rating}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-padma-green">
                      {supplier.certifications.slice(0, 2).join(' · ')}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}