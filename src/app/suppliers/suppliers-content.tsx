'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/stores/language-store';
import { SUPPLIERS } from '@/data/mock-suppliers';
import { DIVISIONS } from '@/data/mock-categories';
import { SupplierGrid } from '@/components/suppliers/supplier-grid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CATEGORIES } from '@/data/mock-categories';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export function SuppliersContent() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [tier, setTier] = useState('all');
  const [division, setDivision] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (value: string | null) => value && setCategory(value);
  const handleTierChange = (value: string | null) => value && setTier(value);
  const handleDivisionChange = (value: string | null) => value && setDivision(value);

  const filteredSuppliers = useMemo(() => {
    return SUPPLIERS.filter((supplier) => {
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesName =
          supplier.name.toLowerCase().includes(searchLower) ||
          supplier.nameBn.includes(search) ||
          supplier.description.en.toLowerCase().includes(searchLower);
        if (!matchesName) return false;
      }
      if (category !== 'all' && supplier.category !== category) return false;
      if (tier !== 'all' && supplier.tier !== tier) return false;
      if (division !== 'all' && supplier.location.division !== division) return false;
      return true;
    });
  }, [search, category, tier, division]);

  const hasActiveFilters = category !== 'all' || tier !== 'all' || division !== 'all';

  const clearFilters = () => {
    setCategory('all');
    setTier('all');
    setDivision('all');
  };

  return (
    <div className="min-h-screen bg-jute-cream">
      {/* Header */}
      <div className="bg-bengal-forest text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {t('suppliers.title')}
            </h1>
            <p className="text-lg text-gray-300">
              {t('suppliers.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t('common.search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-3">
              <Select value={category} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t('suppliers.filters.category')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('suppliers.filters.allCategories')}</SelectItem>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name.en}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={tier} onValueChange={handleTierChange}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder={t('suppliers.filters.tier')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('suppliers.filters.allTiers')}</SelectItem>
                  <SelectItem value="Verified">Verified</SelectItem>
                  <SelectItem value="Gold">Gold</SelectItem>
                  <SelectItem value="Platinum">Platinum</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {t('common.filter')}
              </Button>

              {hasActiveFilters && (
                <Button variant="ghost" onClick={clearFilters}>
                  <X className="h-4 w-4 mr-2" />
                  {t('suppliers.filters.clearAll')}
                </Button>
              )}
            </div>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="mt-4 pt-4 border-t md:hidden"
            >
              <div className="grid grid-cols-2 gap-4">
                <Select value={division} onValueChange={handleDivisionChange}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('suppliers.filters.location')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('suppliers.filters.allDivisions')}</SelectItem>
                    {DIVISIONS.map((div) => (
                      <SelectItem key={div} value={div}>
                        {div}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredSuppliers.length} supplier{filteredSuppliers.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Suppliers Grid */}
        <SupplierGrid suppliers={filteredSuppliers} />
      </div>
    </div>
  );
}