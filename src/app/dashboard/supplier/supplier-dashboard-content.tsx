'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/stores/language-store';
import { SUPPLIERS } from '@/data/mock-suppliers';
import { getProductsBySupplier } from '@/data/mock-products';
import { AnimatedCounter } from '@/hooks/use-counter';
import { Button } from '@/components/ui/button';
import {
  MessageSquare,
  Package,
  ShoppingCart,
  TrendingUp,
  Plus,
  Eye,
  Mail,
  Clock,
  Building2,
  ArrowRight,
} from 'lucide-react';

export function SupplierDashboardContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { t, language } = useLanguage();

  // Use first Platinum supplier as demo
  const supplier = SUPPLIERS.find(s => s.tier === 'Platinum') || SUPPLIERS[0];
  const products = getProductsBySupplier(supplier.id);

  const stats = {
    totalInquiries: 47,
    productsListed: products.length,
    activeOrders: 8,
    responseRate: supplier.responseRate,
  };

  const recentInquiries = [
    {
      id: 'INQ-001',
      buyer: 'Global Fashion Corp',
      product: 'Organic Cotton Polo Shirts',
      quantity: 5000,
      date: '2026-04-28',
      status: 'new',
    },
    {
      id: 'INQ-002',
      buyer: 'European Retail Group',
      product: 'Bamboo T-Shirts',
      quantity: 3000,
      date: '2026-04-27',
      status: 'responded',
    },
    {
      id: 'INQ-003',
      buyer: 'US Fashion Brands Inc.',
      product: 'Recycled Polyester Jacket',
      quantity: 2000,
      date: '2026-04-26',
      status: 'pending',
    },
  ];

  const statusColors = {
    new: 'bg-padma-green/10 text-padma-green',
    responded: 'bg-blue-100 text-blue-800',
    pending: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div ref={ref} className="min-h-screen bg-jute-cream">
      {/* Header */}
      <div className="bg-bengal-forest text-white py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{t('dashboard.supplier.title')}</h1>
                <p className="text-gray-300">{supplier.name}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { key: 'totalInquiries', value: stats.totalInquiries, icon: MessageSquare, color: 'text-blue-600' },
            { key: 'productsListed', value: stats.productsListed, icon: Package, color: 'text-purple-600' },
            { key: 'activeOrders', value: stats.activeOrders, icon: ShoppingCart, color: 'text-orange-600' },
            { key: 'responseRate', value: stats.responseRate, suffix: '%', icon: TrendingUp, color: 'text-padma-green' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center mb-3`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <p className="text-2xl font-bold text-bengal-forest">
                  {typeof stat.value === 'number' ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-sm text-gray-500">{t(`dashboard.supplier.${stat.key}`)}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Inquiries */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-bengal-forest">{t('dashboard.supplier.recentInquiries')}</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <div className="divide-y divide-gray-100">
                {recentInquiries.map((inquiry) => (
                  <div key={inquiry.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm text-gray-500">{inquiry.id}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${statusColors[inquiry.status as keyof typeof statusColors]}`}>
                            {inquiry.status}
                          </span>
                        </div>
                        <h3 className="font-medium text-bengal-forest mt-1">{inquiry.product}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {inquiry.buyer} | Qty: {inquiry.quantity.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Section */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mt-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="font-bold text-bengal-forest">{t('dashboard.supplier.analytics')}</h2>
              </div>
              <div className="p-6">
                <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Analytics chart placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Product Management */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-bengal-forest">{t('dashboard.supplier.productManagement')}</h2>
              </div>
              <div className="p-4 space-y-3">
                {products.slice(0, 3).map((product) => (
                  <div key={product.id} className="p-3 rounded-lg border border-gray-100">
                    <p className="font-medium text-bengal-forest text-sm truncate">
                      {product.name.en}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      ৳{product.priceRange.min} - ৳{product.priceRange.max}
                    </p>
                  </div>
                ))}
                <Button className="w-full bg-padma-green hover:bg-padma-green/90">
                  <Plus className="h-4 w-4 mr-2" />
                  {t('dashboard.supplier.addProduct')}
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mt-6">
              <div className="p-6 border-b border-gray-100">
                <h2 className="font-bold text-bengal-forest">Quick Actions</h2>
              </div>
              <div className="p-4 space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Product
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Response to Inquiries
                </Button>
                <Link href={`/suppliers/${supplier.id}`}>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}