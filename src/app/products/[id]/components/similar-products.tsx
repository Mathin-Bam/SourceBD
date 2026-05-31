'use client';

import Link from 'next/link';
import type { Product } from '@/lib/types';

interface SimilarProductsProps {
  products: Product[];
  language: 'en' | 'bn';
}

export function SimilarProducts({ products, language }: SimilarProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-12 mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Products</h2>
      
      <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x">
        {products.map((product) => {
          const name = product.name[language] || product.name.en;
          
          return (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="flex-shrink-0 w-64 snap-start group"
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                  <img 
                    src={product.images[0]} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-medium text-gray-900 line-clamp-2 mb-2 group-hover:text-padma-green transition-colors">
                    {name}
                  </h3>
                  <div className="mt-auto">
                    <span className="font-bold text-lg text-bengal-forest block">
                      ৳{product.priceRange.min} - ৳{product.priceRange.max}
                    </span>
                    <span className="text-xs text-gray-500">
                      Min. Order: {product.moq}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
