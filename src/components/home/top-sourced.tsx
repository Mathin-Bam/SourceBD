'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';

const TOP_SOURCED = [
  {
    id: 'textiles',
    title: 'Textiles & RMG',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80',
    products: ['Denim Jeans', 'Cotton T-Shirts', 'Knitted Sweaters', 'Activewear', 'Woven Shirts']
  },
  {
    id: 'jute',
    title: 'Jute & Packaging',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400&q=80',
    products: ['Jute Bags', 'Jute Yarn', 'Hessian Cloth', 'Eco-friendly Sacks', 'Jute Handicrafts']
  },
  {
    id: 'leather',
    title: 'Leather & Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80',
    products: ['Leather Shoes', 'Leather Bags', 'Wallets & Belts', 'Crust Leather', 'Finished Leather']
  },
  {
    id: 'pharma',
    title: 'Pharmaceuticals',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80',
    products: ['Generic Medicines', 'Active Ingredients', 'Vitamins', 'Medical Supplies', 'Surgical Items']
  },
  {
    id: 'frozen',
    title: 'Frozen Foods & Seafood',
    image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&q=80',
    products: ['Black Tiger Shrimp', 'Freshwater Fish', 'Frozen Vegetables', 'Processed Snacks', 'Ready to Eat']
  },
  {
    id: 'agro',
    title: 'Agro Products',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80',
    products: ['Black Tea', 'Spices & Herbs', 'Aromatic Rice', 'Fresh Fruits', 'Organic Honey']
  }
];

export function TopSourced() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-padma-green mb-4 block">
            Trending Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bengal-forest mb-4">
            Top Sourced from Bangladesh
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Explore the most frequently sourced products across our major industrial sectors.
          </p>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOP_SOURCED.map((category) => (
            <StaggerItem key={category.id}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="group bg-white rounded-sm p-6 h-full flex flex-col shadow-[0_4px_20px_rgba(10,54,34,0.06)] hover:shadow-[0_32px_64px_-16px_rgba(10,54,34,0.15)]"
              >
                <Link href={`/products?category=${category.id}`}>
                  <h3 className="text-xl font-bold text-bengal-forest group-hover:text-sundarban-green transition-colors duration-500 mb-6">
                    {category.title}
                  </h3>
                </Link>
                
                <div className="flex gap-6">
                  <div className="w-[120px] shrink-0">
                    <Link href={`/products?category=${category.id}`}>
                      <div className="aspect-square rounded-sm overflow-hidden bg-[#F8F9FA]">
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                      </div>
                    </Link>
                  </div>
                  
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {category.products.map((product, idx) => (
                        <li key={idx}>
                          <Link 
                            href={`/products?category=${category.id}&q=${encodeURIComponent(product)}`}
                            className="group/link flex items-center py-0.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-padma-green/0 group-hover/link:bg-padma-green/100 mr-0 group-hover/link:mr-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                            <span className="relative inline-block text-sm text-gray-500 group-hover/link:text-sundarban-green group-hover/link:translate-x-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                              {product}
                              <span className="absolute left-0 -bottom-0.5 w-full h-[1px] bg-sundarban-green origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
