'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { useLanguage } from '@/stores/language-store';
import { PRODUCTS } from '@/data/mock-products';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CATEGORIES } from '@/data/mock-categories';

export function ProductsContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesName =
          product.name.en.toLowerCase().includes(searchLower) ||
          product.name.bn.includes(searchLower);
        if (!matchesName) return false;
      }
      if (category !== 'all' && product.category !== category) return false;
      return true;
    });
  }, [search, category]);

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
              Popular Export Products
            </h1>
            <p className="text-lg text-gray-300">
              Discover the latest and most exported products from Bangladesh's top manufacturers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={ref} className="container mx-auto px-4 py-8">
        
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t('common.search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-3">
              <Select value={category} onValueChange={(value) => value && setCategory(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name.en}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const productName = language === 'bn' ? product.name.bn : product.name.en;

            return (
              <StaggerItem key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                      {product.images[0] ? (
                        <img
                          src={product.images[0]}
                          alt={productName}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No Image
                        </div>
                      )}
                      {product.featured && (
                        <div className="absolute top-2 right-2 bg-loom-gold text-bengal-forest text-xs font-bold px-2 py-1 rounded">
                          {t('common.featured')}
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-bengal-forest mb-1 line-clamp-2">
                        {productName}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                        {product.supplierName}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          <span className="text-sm font-bold text-padma-green">
                            ৳{product.priceRange.min} - ৳{product.priceRange.max}
                          </span>
                          <span className="text-xs text-gray-500 block mt-1">
                            {t('common.minOrder')}: {product.moq}
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
