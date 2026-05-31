import type { Metadata } from 'next';
import { SupplierDashboardContent } from './supplier-dashboard-content';

export const metadata: Metadata = {
  title: 'Supplier Dashboard',
  description: 'Manage your inquiries, products, and orders on SourceBD',
};

export default function SupplierDashboardPage() {
  return <SupplierDashboardContent />;
}