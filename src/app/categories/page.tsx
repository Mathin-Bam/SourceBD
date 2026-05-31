import type { Metadata } from 'next';
import { CategoriesContent } from './categories-content';

export const metadata: Metadata = {
  title: 'Product Categories',
  description: 'Discover quality products from Bangladesh\'s leading manufacturers. Browse categories including textiles, leather, jute, pharmaceuticals, and more.',
};

export default function CategoriesPage() {
  return <CategoriesContent />;
}