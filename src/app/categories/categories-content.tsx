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
  ArrowRight,
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

export function CategoriesContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-jute-cream">
      {/* Header */}
      <div className="bg-bengal-forest text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {t('products.title')}
            </h1>
            <p className="text-lg text-gray-300">
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories Grid */}
      <div ref={ref} className="container mx-auto px-4 py-12">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] || Package;
            const categoryName = category.name[language];

            return (
              <StaggerItem key={category.id}>
                <Link href={`/products?category=${category.id}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={categoryName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bengal-forest/90 via-bengal-forest/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">{categoryName}</h3>
                        <p className="text-sm text-white/80 line-clamp-2">
                          {category.description[language]}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-loom-gold font-medium">
                            {category.count} suppliers
                          </span>
                          <span className="flex items-center text-sm font-medium">
                            Explore
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
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