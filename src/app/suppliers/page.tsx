import type { Metadata } from 'next';
import { SuppliersContent } from './suppliers-content';

export const metadata: Metadata = {
  title: 'Bangladesh Supplier Directory',
  description: 'Find and connect with verified manufacturers across Bangladesh. Browse 2,500+ suppliers in textiles, leather, jute, pharmaceuticals, and more.',
};

export default function SuppliersPage() {
  return <SuppliersContent />;
}