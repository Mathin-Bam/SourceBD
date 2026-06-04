import React from 'react';
import { Supplier } from '@/lib/types';
import { GeometricIcon } from './geometric-icons';
import { BadgeTier } from '@/components/shared/badge-tier';
import { ArrowRight } from 'lucide-react';

interface SupplierLedgerRowProps {
  supplier: Supplier;
}

export function SupplierLedgerRow({ supplier }: SupplierLedgerRowProps) {
  // Safely fallback for missing properties to avoid runtime errors
  const category = supplier.category || 'Apparel';
  const name = supplier.name || 'Unknown Supplier';
  const city = supplier.location?.city || 'Unknown';
  const division = supplier.location?.division || 'Region';
  const employees = supplier.employees || 'N/A';
  const revenue = (supplier as any).revenue || 'N/A';
  const rating = supplier.rating || 'N/A';
  const responseRate = (supplier as any).responseRate || 'N/A';
  const leadTime = (supplier as any).avgLeadTime || 'N/A';
  const certifications = supplier.certifications || [];
  
  const bannerImage = (supplier as any).banner || 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200&q=80';

  return (
    <div className="group relative w-full border-b border-gray-200 bg-[#F8F9FA] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-[#FDFDFB] hover:shadow-[0_32px_64px_-16px_rgba(10,54,34,0.08)] shadow-[0_1px_3px_rgba(10,54,34,0.04)] rounded-sm overflow-hidden">
      
      {/* Background Hover Effect */}
      <img 
        src={bannerImage} 
        alt="" 
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none" 
      />

      <div className="relative z-10 flex w-full items-center justify-between p-5">
        {/* Left Column */}
        <div className="flex w-[35%] items-center gap-4">
          <GeometricIcon category={category} />
          <img 
            src={bannerImage} 
            alt={name} 
            className="w-16 h-12 rounded-sm object-cover shrink-0" 
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-sundarban-green">
                {name}
              </h3>
              {supplier.tier && <BadgeTier tier={supplier.tier} />}
            </div>
            <p className="text-xs text-gray-500">
              {city}, {division}
            </p>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="flex w-[40%] items-center gap-8 px-4">
          <div className="flex flex-col gap-1 min-w-[120px]">
             <span className="text-xs text-gray-500">Employees: <span className="text-xs text-gray-700 font-medium">{employees}</span></span>
             <span className="text-xs text-gray-500">Revenue: <span className="text-xs text-gray-700 font-medium">{revenue}</span></span>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px]">
             <span className="text-xs text-gray-500">Rating: <span className="text-xs text-gray-700 font-medium">{rating}</span></span>
             <span className="text-xs text-gray-500">Response: <span className="text-xs text-gray-700 font-medium">{responseRate}</span></span>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px]">
             <span className="text-xs text-gray-500">Lead Time</span>
             <span className="text-xs text-gray-700 font-medium">{leadTime}</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex w-[25%] items-center justify-end relative pr-32">
          <div className="flex flex-wrap items-center justify-end gap-1.5 max-w-[200px]">
            {certifications.slice(0, 3).map((cert, idx) => (
              <span key={idx} className="bg-gray-100/50 text-[10px] font-medium px-2 py-0.5 rounded text-gray-500 border border-gray-200 whitespace-nowrap">
                {cert}
              </span>
            ))}
            {certifications.length > 3 && (
              <span className="bg-gray-100/50 text-[10px] font-medium px-2 py-0.5 rounded text-gray-500 border border-gray-200">
                +{certifications.length - 3}
              </span>
            )}
          </div>

          {/* Hover CTA Button */}
          <div className="absolute right-2 opacity-0 transform translate-x-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100">
            <button className="flex items-center gap-1 text-sm text-jute-gold font-semibold group-hover:text-jute-gold/80 transition-colors">
              View Profile <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
