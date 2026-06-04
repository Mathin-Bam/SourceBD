'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/stores/language-store';
import { BadgeTier } from '@/components/shared/badge-tier';
import { Button } from '@/components/ui/button';
import type { Supplier } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  MapPin,
  Users,
  Star,
  Building2,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface SupplierCardProps {
  supplier: Supplier;
  className?: string;
}

export function SupplierCard({ supplier, className }: SupplierCardProps) {
  const { language, t } = useLanguage();

  return (
    <Link href={`/suppliers/${supplier.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className={cn(
          'group bg-white rounded-sm overflow-hidden h-full flex flex-col shadow-[0_1px_3px_rgba(10,54,34,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(10,54,34,0.08)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
          className
        )}
      >
        {/* Content */}
        <div className="p-7 flex-1 flex flex-col">
          {/* Header row */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-sm bg-[#F8F9FA] flex items-center justify-center shrink-0 overflow-hidden border border-gray-100">
                <img src={supplier.logo || `https://ui-avatars.com/api/?name=${encodeURIComponent(supplier.name)}&background=0A3622&color=fff&size=128&font-size=0.4`} alt={supplier.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display tracking-tight font-bold text-bengal-forest group-hover:text-sundarban-green transition-colors duration-500 truncate">
                  {language === 'bn' && supplier.nameBn ? supplier.nameBn : supplier.name}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
                  {supplier.category}
                </span>
              </div>
            </div>
            <BadgeTier tier={supplier.tier} size="sm" animated />
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-4">
            <MapPin className="h-3 w-3 text-gray-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
              {supplier.location.city}, {supplier.location.division}
            </span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-gray-300" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
                {supplier.employees.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-3.5 w-3.5 text-jute-gold fill-jute-gold" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
                {supplier.rating}
              </span>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {supplier.certifications.slice(0, 3).map((cert) => (
              <span
                key={cert}
                className="px-2 py-0.5 bg-[#F8F9FA] font-mono text-[11px] uppercase tracking-widest text-gray-500 rounded-sm"
              >
                {cert}
              </span>
            ))}
            {(supplier.certifications.length) > 3 && (
              <span className="px-2 py-0.5 bg-[#F8F9FA] font-mono text-[11px] uppercase tracking-widest text-gray-400 rounded-sm">
                +{supplier.certifications.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-gray-300" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
                {supplier.avgLeadTime}
              </span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-padma-green group-hover:text-sundarban-green transition-colors duration-500">
              {t('suppliers.card.viewProfile')}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}