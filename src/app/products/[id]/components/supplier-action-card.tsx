'use client';

import Link from 'next/link';
import { Building2, ShieldCheck, Clock, CheckCircle2, MessageSquare, ShoppingCart, Mail } from 'lucide-react';
import type { Supplier } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface SupplierActionCardProps {
  supplier: Supplier;
  language: 'en' | 'bn';
}

export function SupplierActionCard({ supplier, language }: SupplierActionCardProps) {
  const name = supplier.nameBn && language === 'bn' ? supplier.nameBn : supplier.name;

  return (
    <div className="sticky top-24 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
      {/* Supplier Header Info */}
      <div className="p-5 border-b border-gray-100">
        <Link href={`/suppliers/${supplier.id}`} className="group flex items-start gap-3">
          <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 overflow-hidden">
            {supplier.logo ? (
              <img src={supplier.logo} alt={name} className="w-full h-full object-contain" />
            ) : (
              <Building2 className="w-6 h-6 text-gray-400" />
            )}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 group-hover:text-padma-green transition-colors line-clamp-2">
              {name}
            </h3>
            <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
              <span>Manufacturer / Exporter</span>
            </div>
          </div>
        </Link>

        {/* Verification Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded-md border border-amber-200/50">
            <ShieldCheck className="w-3.5 h-3.5" />
            {supplier.tier} Supplier
          </div>
          {supplier.verified && (
            <div className="flex items-center gap-1 text-xs font-medium text-padma-green bg-mint-mist px-2 py-1 rounded-md border border-padma-green/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified
            </div>
          )}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="p-5 border-b border-gray-100 bg-gray-50/50">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 mb-1">Response Time</span>
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
              <Clock className="w-4 h-4 text-green-600" />
              &lt; 24h
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 mb-1">Response Rate</span>
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
              <MessageSquare className="w-4 h-4 text-green-600" />
              {supplier.responseRate}%
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 mb-1">Store Rating</span>
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {supplier.rating}/5.0
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 mb-1">Experience</span>
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
              <ShieldCheck className="w-4 h-4 text-gray-400" />
              {new Date().getFullYear() - supplier.yearEstablished} yrs
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 flex flex-col gap-3">
        <Button className="w-full bg-padma-green hover:bg-bengal-forest text-white gap-2 font-medium">
          <Mail className="w-4 h-4" />
          Send Inquiry
        </Button>
        <Button variant="outline" className="w-full border-padma-green text-padma-green hover:bg-mint-mist gap-2">
          <MessageSquare className="w-4 h-4" />
          Chat Now
        </Button>
        <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-900 gap-2">
          <ShoppingCart className="w-4 h-4" />
          Start Order
        </Button>
      </div>
      
      {/* Mini Footer link */}
      <div className="bg-gray-50 p-3 text-center border-t border-gray-100 mt-auto">
        <Link href={`/suppliers/${supplier.id}`} className="text-xs text-gray-500 hover:text-padma-green transition-colors font-medium">
          View Supplier Profile &rarr;
        </Link>
      </div>
    </div>
  );
}
