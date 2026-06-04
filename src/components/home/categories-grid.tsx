'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/stores/language-store';
import { CATEGORIES } from '@/data/mock-categories';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';

export function CategoriesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  const featuredCategories = CATEGORIES.filter(c => c.featured);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#FDFDFB]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-padma-green mb-4 block">
            Industries
          </span>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-bengal-forest mb-4">
            {t('home.categories.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            {t('home.categories.subtitle')}
          </p>
        </motion.div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3">
          {featuredCategories.map((category, index) => {
            const categoryName = t(`home.categories.${category.id.replace('-', '')}`);
            const isLarge = index === 0;
            const isWide = index === 1;

            return (
              <StaggerItem
                key={category.id}
                className={`${
                  isLarge ? 'md:col-span-2 md:row-span-2' : isWide ? 'md:col-span-2' : ''
                }`}
              >
                <Link href={`/products?category=${category.id}`} className="block h-full">
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="group relative rounded-sm overflow-hidden h-full cursor-pointer"
                  >
                    <img
                      src={category.image}
                      alt={categoryName}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className={`font-display font-semibold text-white ${
                        isLarge ? 'text-2xl md:text-3xl' : 'text-base md:text-lg'
                      } tracking-tight`}>
                        {categoryName}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-1 block">
                        {category.count} suppliers
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Link href="/categories">
            <motion.span
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-padma-green hover:text-sundarban-green transition-colors duration-500"
            >
              View all {CATEGORIES.length} categories
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}