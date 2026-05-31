import { notFound } from 'next/navigation';
import { getProductById, getProductsByCategory } from '@/data/mock-products';
import { getSupplierById } from '@/data/mock-suppliers';
import { ProductGallery } from './components/product-gallery';
import { CoreProductInfo } from './components/core-product-info';
import { SupplierActionCard } from './components/supplier-action-card';
import { DeepDiveTabs } from './components/deep-dive-tabs';
import { SimilarProducts } from './components/similar-products';

const LANGUAGE = 'en';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = getProductById(id);
  if (!product) notFound();

  const supplier = getSupplierById(product.supplierId);
  if (!supplier) notFound();

  const similarProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 8);

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20 lg:pb-0">
      {/* Top Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 md:py-8">

          {/* Row 1: Image (1/3) + Info (2/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {/* Image — 1 column */}
            <div className="md:col-span-1">
              <ProductGallery
                images={product.images}
                productName={product.name[LANGUAGE] || product.name.en}
              />
            </div>

            {/* Info — 2 columns */}
            <div className="md:col-span-2">
              <CoreProductInfo product={product} language={LANGUAGE} />
            </div>
          </div>

          {/* Row 2: Supplier card below the image area */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {/* Supplier card sits under the image column */}
            <div className="md:col-span-1">
              <SupplierActionCard supplier={supplier} language={LANGUAGE} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Floating bottom CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-50 flex items-center justify-between gap-4">
        <div className="flex flex-col min-w-0">
          <span className="text-lg font-bold text-bengal-forest truncate">
            ৳{product.tieredPrices ? product.tieredPrices[product.tieredPrices.length - 1].price.toLocaleString() : product.priceRange.min.toLocaleString()}
            {product.tieredPrices && (
              <span className="text-sm font-normal text-gray-500 ml-1">
                - ৳{product.tieredPrices[0].price.toLocaleString()}
              </span>
            )}
          </span>
          <span className="text-xs text-gray-500 truncate">Min. Order: {product.moq}</span>
        </div>
        <div className="flex gap-2 shrink-0">
          <button className="px-4 py-2.5 border border-padma-green text-padma-green rounded-lg font-medium text-sm">
            Chat
          </button>
          <button className="px-4 py-2.5 bg-padma-green text-white rounded-lg font-medium text-sm">
            Inquire
          </button>
        </div>
      </div>

      {/* Below the fold */}
      <div className="container mx-auto px-4">
        <DeepDiveTabs product={product} supplier={supplier} language={LANGUAGE} />
        <SimilarProducts products={similarProducts} language={LANGUAGE} />
      </div>
    </div>
  );
}
