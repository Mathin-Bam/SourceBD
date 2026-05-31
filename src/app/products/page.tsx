import type { Metadata } from 'next';
import { ProductsContent } from './products-content';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore the latest and most exported products from Bangladesh manufacturers.',
};

export default function ProductsPage() {
  return <ProductsContent />;
}
