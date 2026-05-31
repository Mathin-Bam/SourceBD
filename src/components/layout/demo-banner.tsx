'use client';

import { motion } from 'framer-motion';
import { useDemo } from '@/stores/demo-store';
import { useLanguage } from '@/stores/language-store';
import { X, Info } from 'lucide-react';

export function DemoBanner() {
  const { isDemo } = useDemo();
  const { t } = useLanguage();

  if (!isDemo) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-loom-gold text-bengal-forest"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Info className="h-4 w-4" />
          <span>{t('demo.banner')}</span>
        </div>
      </div>
    </motion.div>
  );
}