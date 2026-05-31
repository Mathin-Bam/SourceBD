'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Share2, Heart, Flag, ShieldCheck } from 'lucide-react';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CoreProductInfoProps {
  product: Product;
  language: 'en' | 'bn';
}

export function CoreProductInfo({ product, language }: CoreProductInfoProps) {
  const [selectedVariations, setSelectedVariations] = useState<Record<string, string>>({});

  const handleSelectVariation = (variationName: string, option: string) => {
    setSelectedVariations(prev => ({ ...prev, [variationName]: option }));
  };

  const name = product.name[language] || product.name.en;

  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumbs & Top Utilities */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <nav className="flex items-center text-sm text-gray-500 whitespace-nowrap overflow-x-auto scrollbar-hide">
          <Link href="/" className="hover:text-padma-green">Home</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link href="/products" className="hover:text-padma-green">Products</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link href={`/products?category=${product.category}`} className="hover:text-padma-green capitalize">
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-gray-900 font-medium truncate max-w-[200px]">{name}</span>
        </nav>
        
        <div className="flex items-center gap-2 text-gray-500">
          <Button variant="ghost" size="sm" className="h-8 gap-1"><Share2 className="w-4 h-4" /> Share</Button>
          <Button variant="ghost" size="sm" className="h-8 gap-1"><Heart className="w-4 h-4" /> Save</Button>
          <Button variant="ghost" size="sm" className="h-8 gap-1"><Flag className="w-4 h-4" /> Report</Button>
        </div>
      </div>

      {/* Title & Badges */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{name}</h1>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {product.featured && <Badge className="bg-loom-gold text-bengal-forest hover:bg-loom-gold">Featured</Badge>}
          <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">Ready to Ship</Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">OEM Available</Badge>
        </div>
        
        {/* Review Summary */}
        {product.reviews && (
          <div className="flex items-center gap-2 text-sm mt-3">
            <div className="flex items-center text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.reviews!.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-gray-900">{product.reviews.rating}</span>
            <a href="#reviews" className="text-padma-green hover:underline">
              ({product.reviews.count} reviews)
            </a>
          </div>
        )}
      </div>

      {/* Tiered Pricing (Alibaba Style) */}
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-wrap gap-4 md:gap-8">
        {product.tieredPrices ? (
          product.tieredPrices.map((tier, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl font-bold text-bengal-forest">
                ৳{tier.price.toLocaleString()}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {tier.minQty}{tier.maxQty ? ` - ${tier.maxQty}` : '+'} Pieces
              </span>
            </div>
          ))
        ) : (
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-bengal-forest">
              ৳{product.priceRange.min.toLocaleString()} - ৳{product.priceRange.max.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Min. Order: {product.moq}
            </span>
          </div>
        )}
      </div>

      {/* Variations Selector */}
      {product.variations && product.variations.length > 0 && (
        <div className="flex flex-col gap-4 py-2">
          {product.variations.map((variation, idx) => {
            const vName = variation.name[language] || variation.name.en;
            return (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <span className="text-sm font-medium text-gray-700 sm:w-16 pt-2">{vName}:</span>
                <div className="flex flex-wrap gap-2 flex-1">
                  {variation.options.map((opt, optIdx) => {
                    const optName = opt[language] || (opt as any).en || String(opt);
                    const isSelected = selectedVariations[vName] === optName;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectVariation(vName, optName)}
                        className={cn(
                          "px-4 py-2 border rounded-md text-sm font-medium transition-colors",
                          isSelected 
                            ? "border-padma-green bg-padma-green/5 text-padma-green" 
                            : "border-gray-200 text-gray-700 hover:border-padma-green hover:text-padma-green"
                        )}
                      >
                        {optName}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Key Specifications Table (IndiaMART Style) */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Key Specifications</h3>
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="w-full text-sm text-left">
            <tbody>
              {product.specifications.slice(0, 5).map((spec, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <th className="px-4 py-3 font-medium text-gray-600 w-1/3 border-r border-gray-100">
                    {spec.label[language] || spec.label.en}
                  </th>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    {spec.value[language] || spec.value.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a href="#details" className="inline-block mt-3 text-sm text-padma-green hover:underline font-medium">
          View all specifications
        </a>
      </div>

      {/* Logistics & Customizations */}
      <div className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-padma-green mt-0.5 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-gray-900">Trade Assurance</h4>
            <p className="text-sm text-gray-500">Protects your SourceBD orders</p>
          </div>
        </div>

        {product.customizationOptions && product.customizationOptions.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4 mt-2">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Customization</h4>
            <ul className="space-y-2">
              {product.customizationOptions.map((opt, idx) => (
                <li key={idx} className="flex justify-between text-sm">
                  <span className="text-gray-600">{opt.label[language] || opt.label.en}</span>
                  <span className="text-gray-900 font-medium">Min. Order: {opt.minOrder}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </div>
  );
}
