import type { Metadata } from 'next';
import { BuyerDashboardContent } from './buyer-dashboard-content';

export const metadata: Metadata = {
  title: 'Buyer Dashboard',
  description: 'Manage your RFQs, orders, and saved suppliers on SourceBD',
};

export default function BuyerDashboardPage() {
  return <BuyerDashboardContent />;
}