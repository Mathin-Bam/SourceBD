'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/stores/language-store';
import { SUPPLIERS } from '@/data/mock-suppliers';
import FilterSidebar, { FilterState } from '@/components/suppliers/filter-sidebar';
import { SectorScroller } from '@/components/suppliers/sector-scroller';
import { SupplierLedgerRow } from '@/components/suppliers/supplier-ledger-row';
import { SupplierGridCard } from '@/components/suppliers/supplier-grid-card';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GridSkeleton } from '@/components/shared/loading-skeleton';

export function SuppliersContent() {
  const { t } = useLanguage();
  
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    industry: [],
    tier: [],
    division: [],
    certifications: [],
    minLeadTime: '',
    maxLeadTime: ''
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // You could also sync this with filters.industry if needed, but for visual purpose it's fine
  };

  const filteredSuppliers = useMemo(() => {
    return SUPPLIERS.filter((supplier) => {
      // Search
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesName =
          supplier.name.toLowerCase().includes(searchLower) ||
          supplier.nameBn.includes(filters.search) ||
          supplier.description.en.toLowerCase().includes(searchLower);
        if (!matchesName) return false;
      }
      
      // Category / Industry
      if (selectedCategory !== 'all' && supplier.category !== selectedCategory) {
         return false;
      }

      // Tier
      if (filters.tier && filters.tier.length > 0) {
         // Map UI tier names to data tier names if needed
         // Using basic includes for now
         if (!filters.tier.some(t => t.includes(supplier.tier))) return false;
      }

      // Division
      if (filters.division && filters.division.length > 0) {
        if (!filters.division.includes(supplier.location.division) && !filters.division.includes(supplier.location.city)) return false;
      }

      // Certifications
      if (filters.certifications && filters.certifications.length > 0) {
        const hasAllCerts = filters.certifications.every(c => supplier.certifications.includes(c));
        if (!hasAllCerts) return false;
      }

      return true;
    });
  }, [filters, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FDFDFB] font-sans">
      {/* Hero Header */}
      <div className="bg-[#0A3622] text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Bangladesh Manufacturer Registry
            </h1>
            <p className="text-lg text-[#D4AF37] font-medium">
              Verified Sourcing Intelligence
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Command Center Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Left Sidebar (25%) */}
          <div className="lg:col-span-1 flex flex-col gap-6 sticky top-24">
            <div className="bg-white rounded-sm shadow-[0_1px_3px_rgba(10,54,34,0.04)] overflow-hidden">
              <FilterSidebar 
                filters={filters} 
                onFilterChange={handleFilterChange} 
              />
            </div>
          </div>

          {/* Right Ledger Area (75%) */}
          <div className="lg:col-span-3 flex flex-col">
            
            {/* Sector Scroller */}
            <div className="mb-8">
              <SectorScroller 
                selectedCategory={selectedCategory}
                onSelect={handleCategorySelect}
              />
            </div>

            {/* Results Count & View Toggle */}
            <div className="flex items-center justify-between border-b border-gray-100/60 pb-4 mb-4">
              <div className="flex items-center gap-4">
                <h2 className="text-lg text-[#0A3622] font-bold">
                  Directory Results
                </h2>
                <div className="hidden sm:flex items-center bg-gray-100/50 p-1 rounded-sm border border-gray-200">
                  <button 
                    onClick={() => setViewMode('list')}
                    className={cn("p-1.5 rounded-[2px] transition-colors", viewMode === 'list' ? 'bg-white shadow-sm text-[#0A3622]' : 'text-gray-400 hover:text-gray-600')}
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={cn("p-1.5 rounded-[2px] transition-colors", viewMode === 'grid' ? 'bg-white shadow-sm text-[#0A3622]' : 'text-gray-400 hover:text-gray-600')}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium">
                Showing {filteredSuppliers.length} supplier{filteredSuppliers.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* High-Density Ledger / Grid */}
            {filteredSuppliers.length > 0 ? (
              <StaggerContainer className={cn("gap-5", viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col gap-0.5")}>
                {filteredSuppliers.map((supplier, index) => (
                  <StaggerItem key={supplier.id} index={index}>
                    {viewMode === 'list' ? (
                      <SupplierLedgerRow supplier={supplier} />
                    ) : (
                      <SupplierGridCard supplier={supplier} />
                    )}
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <div className="py-20 text-center border border-dashed border-gray-200 rounded-sm bg-white mt-4">
                <p className="text-sm text-gray-500">
                  No suppliers match these criteria
                </p>
                <button 
                  onClick={() => {
                     setFilters({ search: '', industry: [], tier: [], division: [], certifications: [], minLeadTime: '', maxLeadTime: ''});
                     setSelectedCategory('all');
                  }}
                  className="mt-4 px-4 py-2 border border-[#0A3622] text-[#0A3622] text-sm font-medium rounded-sm hover:bg-[#0A3622] hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}