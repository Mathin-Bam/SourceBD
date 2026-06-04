'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/stores/language-store';
import { CATEGORIES } from '@/data/mock-categories';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';

export function CategoriesContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FDFDFB] pt-24 pb-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-padma-green mb-4 block">
            All Industries
          </span>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight text-bengal-forest mb-4">
            {t('products.title')}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            {t('products.subtitle')}
          </p>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" ref={ref}>
          {CATEGORIES.map((category) => {
            const categoryName = category.name[language];

            return (
              <StaggerItem key={category.id}>
                <Link href={`/products?category=${category.id}`} className="block h-full">
                  <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="group relative rounded-sm overflow-hidden h-[240px] cursor-pointer"
                  >
                    <img
                      src={category.image}
                      alt={categoryName}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                      <h3 className="font-display font-semibold text-white text-2xl tracking-tight mb-2">
                        {categoryName}
                      </h3>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-white/70 mb-4 line-clamp-2">
                        {category.description[language]}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-loom-gold">
                          {category.count} suppliers
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-white flex items-center gap-2 group-hover:text-loom-gold transition-colors duration-500">
                          Explore
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}