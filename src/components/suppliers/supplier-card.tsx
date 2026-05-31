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
        whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        className={cn(
          'group bg-white rounded-xl border border-gray-100 overflow-hidden h-full flex flex-col',
          className
        )}
      >
        {/* Header */}
        <div className="h-28 bg-gradient-to-br from-gray-50 to-gray-100 relative p-4">
          <div className="absolute top-3 right-3">
            <BadgeTier tier={supplier.tier} size="sm" animated />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col -mt-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
              <Building2 className="h-6 w-6 text-padma-green" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-bengal-forest group-hover:text-padma-green transition-colors truncate">
                {language === 'bn' && supplier.nameBn ? supplier.nameBn : supplier.name}
              </h3>
              <p className="text-xs text-gray-500">{supplier.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
            <MapPin className="h-3.5 w-3.5" />
            <span>{supplier.location.city}, {supplier.location.division}</span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{supplier.employees.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-loom-gold fill-loom-gold" />
              <span className="text-gray-600">{supplier.rating}</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-1 mb-4">
            {supplier.certifications.slice(0, 3).map((cert) => (
              <span
                key={cert}
                className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
              >
                {cert}
              </span>
            ))}
            {(supplier.certifications.length) > 3 && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">
                +{supplier.certifications.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t flex items-center justify-between">
            <div className="text-xs text-gray-500">
              <Clock className="h-3 w-3 inline mr-1" />
              {supplier.avgLeadTime}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-padma-green hover:text-padma-green hover:bg-mint-mist font-medium"
            >
              {t('suppliers.card.viewProfile')}
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}