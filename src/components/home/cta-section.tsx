'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/stores/language-store';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Store, ArrowRight, Users } from 'lucide-react';

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-padma-green">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('home.cta.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For Buyers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-loom-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-padma-green/10 flex items-center justify-center mb-4">
                <ShoppingCart className="h-7 w-7 text-padma-green" />
              </div>
              <h3 className="text-2xl font-bold text-bengal-forest mb-3">
                {t('home.cta.buyerTitle')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('home.cta.buyerDesc')}
              </p>
              <Link href="/suppliers">
                <Button className="bg-padma-green hover:bg-padma-green/90 text-white font-semibold">
                  {t('home.cta.startSourcing')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* For Suppliers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-loom-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-loom-gold/20 flex items-center justify-center mb-4">
                <Store className="h-7 w-7 text-loom-gold" />
              </div>
              <h3 className="text-2xl font-bold text-bengal-forest mb-3">
                {t('home.cta.supplierTitle')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('home.cta.supplierDesc')}
              </p>
              <Link href="/suppliers?become=supplier">
                <Button className="bg-loom-gold hover:bg-loom-gold/90 text-bengal-forest font-semibold">
                  {t('home.cta.joinAsSupplier')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}