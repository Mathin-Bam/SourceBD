'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/stores/language-store';
import { AnimatedCounter } from '@/hooks/use-counter';

const stats = [
  { key: 'suppliers', value: 2500, suffix: '+' },
  { key: 'products', value: 15000, suffix: '+' },
  { key: 'tradeVolume', value: 500, prefix: '৳', suffix: 'Cr+' },
  { key: 'responseRate', value: 98, suffix: '%' },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-white border-y border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-padma-green mb-1">
                {isInView && (
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-sm text-gray-600 font-medium">{t(`home.stats.${stat.key}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}