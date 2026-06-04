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
import { SupplierGridCard } from '@/components/suppliers/supplier-grid-card';

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
            <span className="text-sm font-semibold text-padma-green mb-4 block">
              Verified Partners
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bengal-forest mb-2">
              {t('home.featuredSuppliers.title')}
            </h2>
            <p className="text-lg text-gray-500">
              {t('home.featuredSuppliers.subtitle')}
            </p>
          </div>
          <Link href="/suppliers" className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-padma-green hover:text-sundarban-green transition-colors duration-500">
              {t('common.viewAll')}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_SUPPLIERS.slice(0, 4).map((supplier, index) => (
            <StaggerItem key={supplier.id} index={index}>
              <Link href={`/suppliers/${supplier.id}`}>
                <SupplierGridCard supplier={supplier as any} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}