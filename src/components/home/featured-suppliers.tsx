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
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-bengal-forest mb-2">
              {t('home.featuredSuppliers.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.featuredSuppliers.subtitle')}
            </p>
          </div>
          <Link href="/suppliers" className="mt-4 md:mt-0">
            <Button variant="ghost" className="text-padma-green font-medium">
              {t('common.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_SUPPLIERS.slice(0, 4).map((supplier, index) => (
            <StaggerItem key={supplier.id} index={index}>
              <Link href={`/suppliers/${supplier.id}`}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden h-full"
                >
                  {/* Header Image */}
                  <div className="h-32 bg-gradient-to-br from-padma-green/10 to-loom-gold/10 relative">
                    {supplier.banner && (
                      <img
                        src={supplier.banner}
                        alt=""
                        className="w-full h-full object-cover opacity-50"
                      />
                    )}
                    <div className="absolute top-3 right-3">
                      <BadgeTier tier={supplier.tier} size="sm" animated />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 -mt-8 relative">
                    <div className="w-16 h-16 rounded-lg bg-white shadow-md border border-gray-100 flex items-center justify-center mb-3">
                      <Building2 className="h-8 w-8 text-padma-green" />
                    </div>

                    <h3 className="font-bold text-bengal-forest text-lg group-hover:text-padma-green transition-colors">
                      {language === 'bn' && supplier.nameBn ? supplier.nameBn : supplier.name}
                    </h3>

                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{supplier.location.city}, {supplier.location.division}</span>
                    </div>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {language === 'en' ? supplier.description.en.slice(0, 100) : supplier.description.bn.slice(0, 80)}...
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>{supplier.employees.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-loom-gold fill-loom-gold" />
                        <span className="text-sm font-medium text-bengal-forest">{supplier.rating}</span>
                      </div>
                      <div className="text-xs text-padma-green">
                        {supplier.certifications.slice(0, 2).join(', ')}
                      </div>
                    </div>
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