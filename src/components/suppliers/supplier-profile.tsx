'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/stores/language-store';
import type { Supplier } from '@/lib/types';
import { SupplierCard } from './supplier-card';
import { BadgeTier } from '@/components/shared/badge-tier';
import { PRODUCTS, getProductsBySupplier } from '@/data/mock-products';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Star,
  CheckCircle,
  Building2,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';

interface SupplierProfileProps {
  supplier: Supplier;
}

export function SupplierProfile({ supplier }: SupplierProfileProps) {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  const supplierProducts = getProductsBySupplier(supplier.id);

  return (
    <div className="min-h-screen bg-jute-cream">
      {/* Header Banner */}
      <div className="h-48 md:h-64 bg-gradient-to-br from-bengal-forest to-padma-green relative">
        {supplier.banner && (
          <img
            src={supplier.banner}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bengal-forest/80 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        {/* Back Button */}
        <Link
          href="/suppliers"
          className="inline-flex items-center text-white mb-4 hover:text-loom-gold transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Suppliers
        </Link>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Logo */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-mint-mist flex items-center justify-center shrink-0 border-4 border-white shadow-lg">
              <Building2 className="h-10 w-10 md:h-12 md:w-12 text-padma-green" />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-bengal-forest">
                    {language === 'bn' && supplier.nameBn ? supplier.nameBn : supplier.name}
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <BadgeTier tier={supplier.tier} animated />
                    <span className="text-sm text-gray-500 capitalize">{supplier.category}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {t('suppliers.profile.sendInquiry')}
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-padma-green" />
                  <span className="text-sm">{supplier.location.city}, {supplier.location.division}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-loom-gold fill-loom-gold" />
                  <span className="text-sm font-medium">{supplier.rating}/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-padma-green" />
                  <span className="text-sm">{supplier.responseRate}% Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-padma-green" />
                  <span className="text-sm">{supplier.avgLeadTime}</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mt-4">
                {supplier.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-mint-mist text-padma-green text-sm rounded-full font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs Content */}
        <div className="mt-8 mb-12">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-white border border-gray-200">
              <TabsTrigger value="overview">{t('suppliers.profile.about')}</TabsTrigger>
              <TabsTrigger value="products">{t('suppliers.profile.products')}</TabsTrigger>
              <TabsTrigger value="contact">{t('suppliers.profile.contact')}</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-bengal-forest mb-4">
                  {t('suppliers.profile.companyOverview')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'en' ? supplier.description.en : supplier.description.bn}
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-padma-green" />
                      <span className="text-sm font-medium text-gray-600">{t('suppliers.profile.yearEstablished')}</span>
                    </div>
                    <p className="text-2xl font-bold text-bengal-forest">{supplier.yearEstablished}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-padma-green" />
                      <span className="text-sm font-medium text-gray-600">{t('suppliers.profile.employeeCount')}</span>
                    </div>
                    <p className="text-2xl font-bold text-bengal-forest">{supplier.employees.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-padma-green" />
                      <span className="text-sm font-medium text-gray-600">{t('suppliers.profile.annualRevenue')}</span>
                    </div>
                    <p className="text-2xl font-bold text-bengal-forest">{supplier.annualRevenue}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-padma-green" />
                      <span className="text-sm font-medium text-gray-600">{t('suppliers.profile.leadTime')}</span>
                    </div>
                    <p className="text-lg font-bold text-bengal-forest">{supplier.avgLeadTime}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-padma-green" />
                      <span className="text-sm font-medium text-gray-600">{t('suppliers.profile.minOrder')}</span>
                    </div>
                    <p className="text-lg font-bold text-bengal-forest">{supplier.moq}</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="products" className="mt-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-bengal-forest mb-6">
                  {t('suppliers.profile.products')}
                </h2>
                {supplierProducts.length > 0 ? (
                  <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supplierProducts.map((product) => (
                      <StaggerItem key={product.id}>
                        <Link href={`/products/textiles/${product.id}`}>
                          <motion.div
                            whileHover={{ y: -4 }}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <div className="aspect-video bg-gray-100 relative">
                              {product.images[0] && (
                                <img
                                  src={product.images[0]}
                                  alt={product.name.en}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold text-bengal-forest">
                                {language === 'bn' ? product.name.bn : product.name.en}
                              </h3>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-sm text-gray-500">
                                  ৳{product.priceRange.min.toLocaleString()} - ৳{product.priceRange.max.toLocaleString()}
                                </span>
                                <span className="text-xs text-padma-green">{product.moq}</span>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                ) : (
                  <p className="text-gray-500">No products listed yet.</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-bengal-forest mb-6">
                  {t('suppliers.profile.contact')}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Mail className="h-5 w-5 text-padma-green" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a href={`mailto:${supplier.contact.email}`} className="text-bengal-forest hover:text-padma-green">
                          {supplier.contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Phone className="h-5 w-5 text-padma-green" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a href={`tel:${supplier.contact.phone}`} className="text-bengal-forest hover:text-padma-green">
                          {supplier.contact.phone}
                        </a>
                      </div>
                    </div>
                    {supplier.contact.whatsapp && (
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <MessageCircle className="h-5 w-5 text-padma-green" />
                        <div>
                          <p className="text-sm text-gray-500">WhatsApp</p>
                          <a href={`https://wa.me/${supplier.contact.whatsapp.replace(/\D/g, '')}`} className="text-bengal-forest hover:text-padma-green">
                            {supplier.contact.whatsapp}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-mint-mist rounded-lg">
                    <h3 className="font-semibold text-bengal-forest mb-4">Send Inquiry</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Interested in this supplier? Send them an inquiry with your requirements.
                    </p>
                    <Button className="w-full bg-padma-green hover:bg-padma-green/90">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Inquiry
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}