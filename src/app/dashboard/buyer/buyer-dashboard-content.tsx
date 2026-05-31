'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/stores/language-store';
import { RFQS } from '@/data/mock-rfqs';
import { ORDERS } from '@/data/mock-orders';
import { SUPPLIERS } from '@/data/mock-suppliers';
import { AnimatedCounter } from '@/hooks/use-counter';
import { BadgeTier } from '@/components/shared/badge-tier';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  MessageSquare,
  CheckCircle,
  Wallet,
  Plus,
  Clock,
  Building2,
  ArrowRight,
  TrendingUp,
  Package,
} from 'lucide-react';

export function BuyerDashboardContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { t, language } = useLanguage();

  const stats = {
    activeRFQs: RFQS.filter(r => r.status === 'pending' || r.status === 'quoted').length,
    pendingQuotes: RFQS.reduce((acc, r) => acc + r.quotes.length, 0),
    acceptedOrders: ORDERS.filter(o => o.status === 'delivered').length,
    totalSpent: ORDERS.filter(o => o.status === 'delivered').reduce((acc, o) => acc + o.total, 0),
  };

  const savedSuppliers = SUPPLIERS.filter(s => s.tier === 'Platinum').slice(0, 4);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    quoted: 'bg-blue-100 text-blue-800',
    accepted: 'bg-green-100 text-green-800',
    expired: 'bg-red-100 text-red-800',
  };

  const orderStatusColors = {
    processing: 'bg-yellow-100 text-yellow-800',
    in_production: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
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
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{t('dashboard.buyer.title')}</h1>
            <p className="text-gray-300">Welcome back! Manage your sourcing activities.</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { key: 'activeRFQs', value: stats.activeRFQs, icon: FileText, color: 'text-blue-600' },
            { key: 'pendingQuotes', value: stats.pendingQuotes, icon: MessageSquare, color: 'text-yellow-600' },
            { key: 'acceptedOrders', value: stats.acceptedOrders, icon: CheckCircle, color: 'text-green-600' },
            { key: 'totalSpent', value: stats.totalSpent, prefix: '৳', icon: Wallet, color: 'text-padma-green' },
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
                  {stat.prefix || ''}{typeof stat.value === 'number' && 'totalSpent' === stat.key ? (
                    <AnimatedCounter value={stat.value} suffix="+" />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-sm text-gray-500">{t(`dashboard.buyer.${stat.key}`)}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent RFQs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-bengal-forest">{t('dashboard.buyer.recentRFQs')}</h2>
                <Button className="bg-padma-green hover:bg-padma-green/90">
                  <Plus className="h-4 w-4 mr-2" />
                  {t('dashboard.buyer.postNewRFQ')}
                </Button>
              </div>
              <div className="divide-y divide-gray-100">
                {RFQS.slice(0, 4).map((rfq) => (
                  <div key={rfq.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-bengal-forest">
                          {rfq.productName[language]}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Qty: {rfq.quantity.toLocaleString()} | Target: ৳{rfq.targetPrice}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[rfq.status]}`}>
                            {t(`dashboard.rfq.${rfq.status}`)}
                          </span>
                          {rfq.quotes.length > 0 && (
                            <span className="text-xs text-gray-500">
                              {rfq.quotes.length} quote{rfq.quotes.length > 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {new Date(rfq.createdAt).toLocaleDateString()}
                        </p>
                        {rfq.quotes.length > 0 && (
                          <Button variant="ghost" size="sm" className="mt-1">
                            {t('dashboard.rfq.viewQuotes')}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mt-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="font-bold text-bengal-forest">Recent Orders</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {ORDERS.slice(0, 3).map((order) => (
                  <div key={order.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-gray-400" />
                          <span className="font-mono text-sm text-gray-500">{order.id}</span>
                        </div>
                        <h3 className="font-medium text-bengal-forest mt-1">{order.productName}</h3>
                        <p className="text-sm text-gray-500">
                          {order.supplierName} | Qty: {order.quantity.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-xs px-2 py-1 rounded-full capitalize ${orderStatusColors[order.status]}`}>
                            {t(`dashboard.order.${order.status === 'in_production' ? 'inProduction' : order.status}`)}
                          </span>
                          <span className="text-sm font-medium text-padma-green">
                            ৳{order.total.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {t('dashboard.order.trackOrder')}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Saved Suppliers */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-bengal-forest">{t('dashboard.buyer.savedSuppliers')}</h2>
                <Link href="/suppliers" className="text-sm text-padma-green hover:underline">
                  {t('common.viewAll')}
                </Link>
              </div>
              <div className="p-4 space-y-4">
                {savedSuppliers.map((supplier) => (
                  <Link key={supplier.id} href={`/suppliers/${supplier.id}`}>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className="w-10 h-10 rounded-lg bg-mint-mist flex items-center justify-center shrink-0">
                        <Building2 className="h-5 w-5 text-padma-green" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-bengal-forest truncate">
                          {language === 'bn' ? supplier.nameBn : supplier.name}
                        </p>
                        <p className="text-xs text-gray-500">{supplier.location.city}</p>
                      </div>
                      <BadgeTier tier={supplier.tier} size="sm" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mt-6">
              <div className="p-6 border-b border-gray-100">
                <h2 className="font-bold text-bengal-forest">Quick Actions</h2>
              </div>
              <div className="p-4 space-y-3">
                <Link href="/suppliers">
                  <Button variant="outline" className="w-full justify-start">
                    <Building2 className="h-4 w-4 mr-2" />
                    Browse Suppliers
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Post New RFQ
                </Button>
                <Link href="/products">
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="h-4 w-4 mr-2" />
                    Browse Products
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