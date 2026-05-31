'use client';

import { useState } from 'react';
import type { Product, Supplier } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Factory, FileText, HelpCircle, MessageSquare, Star, Award } from 'lucide-react';

interface DeepDiveTabsProps {
  product: Product;
  supplier: Supplier;
  language: 'en' | 'bn';
}

export function DeepDiveTabs({ product, supplier, language }: DeepDiveTabsProps) {
  const [activeTab, setActiveTab] = useState('details');

  const tabTriggerClass = "h-12 rounded-none border-b-2 border-transparent data-active:border-padma-green data-active:text-padma-green data-active:bg-transparent px-3 data-active:shadow-none font-medium text-gray-600 text-sm";

  return (
    <div className="w-full mt-12 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm" id="deep-dive">
      <Tabs defaultValue="details" value={activeTab} onValueChange={(val) => val && setActiveTab(val as string)}>
        <div className="w-full bg-gray-50 border-b border-gray-200 px-4 pt-2">
          <TabsList className="w-full h-14 bg-transparent justify-start gap-2 rounded-none p-0 overflow-x-auto">
            <TabsTrigger value="details" className={tabTriggerClass}>
              <FileText className="w-4 h-4 mr-1.5" />
              Product Details
            </TabsTrigger>
            <TabsTrigger value="specs" className={tabTriggerClass}>
              <Award className="w-4 h-4 mr-1.5" />
              Specifications
            </TabsTrigger>
            <TabsTrigger value="profile" className={tabTriggerClass}>
              <Factory className="w-4 h-4 mr-1.5" />
              Company Profile
            </TabsTrigger>
            {product.reviews && (
              <TabsTrigger value="reviews" className={tabTriggerClass}>
                <Star className="w-4 h-4 mr-1.5" />
                Reviews ({product.reviews.count})
              </TabsTrigger>
            )}
            {product.faqs && product.faqs.length > 0 && (
              <TabsTrigger value="faq" className={tabTriggerClass}>
                <HelpCircle className="w-4 h-4 mr-1.5" />
                FAQ
              </TabsTrigger>
            )}
          </TabsList>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 min-h-[400px]">
          {/* Product Details Tab */}
          <TabsContent value="details" className="mt-0 focus-visible:outline-none space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Product Overview</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-base leading-relaxed">
                {product.description?.[language] || product.description?.en || 'No description available.'}
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.images.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-gray-100 bg-gray-50 aspect-[4/3]">
                    <img src={img} alt={`Product detail ${idx+1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Specifications Tab */}
          <TabsContent value="specs" className="mt-0 focus-visible:outline-none">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Detailed Specifications</h2>
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="w-full text-sm text-left">
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100/50' : 'bg-white hover:bg-gray-50/50'}>
                      <th className="px-6 py-4 font-medium text-gray-600 w-1/3 sm:w-1/4 border-r border-gray-100">
                        {spec.label[language] || spec.label.en}
                      </th>
                      <td className="px-6 py-4 text-gray-900">
                        {spec.value[language] || spec.value.en}
                      </td>
                    </tr>
                  ))}
                  <tr className={product.specifications.length % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <th className="px-6 py-4 font-medium text-gray-600 w-1/3 sm:w-1/4 border-r border-gray-100">Certifications</th>
                    <td className="px-6 py-4 text-gray-900">
                      <div className="flex flex-wrap gap-2">
                        {product.certifications.map((cert, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Company Profile Tab */}
          <TabsContent value="profile" className="mt-0 focus-visible:outline-none space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-xl font-bold text-gray-900">About {supplier.name}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {supplier.description[language] || supplier.description.en}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Established</span>
                    <strong className="text-gray-900">{supplier.yearEstablished}</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Employees</span>
                    <strong className="text-gray-900">{supplier.employees.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Annual Revenue</span>
                    <strong className="text-gray-900">{supplier.annualRevenue}</strong>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Certifications & Capabilities</h3>
                <ul className="space-y-3">
                  {supplier.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-padma-green" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          {product.reviews && (
            <TabsContent value="reviews" className="mt-0 focus-visible:outline-none">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 bg-gray-50 rounded-xl p-6 border border-gray-100 text-center flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-gray-900 mb-2">{product.reviews.rating}</span>
                  <div className="flex items-center text-yellow-400 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.reviews!.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Based on {product.reviews.count} reviews</span>
                </div>
                <div className="w-full md:w-2/3 flex items-center justify-center text-gray-500 py-12">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p>No written reviews yet for this product.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {/* FAQ Tab */}
          {product.faqs && product.faqs.length > 0 && (
            <TabsContent value="faq" className="mt-0 focus-visible:outline-none">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {product.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                    <h4 className="font-bold text-gray-900 flex items-start gap-2 mb-2">
                      <span className="text-padma-green">Q:</span>
                      {faq.question[language] || faq.question.en}
                    </h4>
                    <p className="text-gray-600 flex items-start gap-2 pl-6">
                      {faq.answer[language] || faq.answer.en}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}

        </div>
      </Tabs>
    </div>
  );
}
