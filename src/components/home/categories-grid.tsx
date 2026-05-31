'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/stores/language-store';
import { CATEGORIES } from '@/data/mock-categories';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import {
  Shirt,
  Package,
  Briefcase,
  Pill,
  Gem,
  Fish,
  Home,
  Wheat,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Shirt,
  Package,
  Briefcase,
  Pill,
  Gem,
  Fish,
  Home,
  Wheat,
};

export function CategoriesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  const featuredCategories = CATEGORIES.filter(c => c.featured);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bengal-forest mb-4">
            {t('home.categories.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('home.categories.subtitle')}
          </p>
        </motion.div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Package;
            const categoryName = t(`home.categories.${category.id.replace('-', '')}`);

            return (
              <StaggerItem key={category.id}>
                <Link href={`/products?category=${category.id}`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={categoryName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bengal-forest/80 via-bengal-forest/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm mb-2">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-sm">{categoryName}</h3>
                        <p className="text-xs text-white/70">{category.count} suppliers</p>
                      </div>
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
          className="text-center mt-8"
        >
          <Link href="/products">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-padma-green font-medium hover:underline"
            >
              {t('common.viewAll')} {CATEGORIES.length} categories
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}