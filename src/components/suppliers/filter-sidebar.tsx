import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Check } from 'lucide-react';

export interface FilterState {
  search: string;
  category?: string[];
  industry?: string[];
  tier?: string[];
  division?: string[];
  certifications?: string[];
  minLeadTime?: number | '';
  maxLeadTime?: number | '';
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
}

const industries = [
  'Apparel & Fashion',
  'Jute & Textiles',
  'Leather Goods',
  'Ceramics & Pottery',
  'Pharmaceuticals',
  'Agriculture & Seafood'
];

const tiers = [
  'SourceBD Verified',
  'Gold Supplier',
  'Strategic Partner'
];

const certificationOptions = [
  'ISO 9001',
  'OEKO-TEX',
  'LEED Certified',
  'Fair Trade',
  'GOTS',
  'Sedex',
  'BSCI'
];

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100/60 py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between group"
        type="button"
      >
        <h3 className="text-sm font-semibold text-[#0A3622]">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-[#0A3622] transition-colors" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#0A3622] transition-colors" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-[800px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange }) => {
  const toggleArrayFilter = (key: keyof FilterState, value: string) => {
    const current = (filters[key] as string[]) || [];
    if (current.includes(value)) {
      onFilterChange(key, current.filter(item => item !== value));
    } else {
      onFilterChange(key, [...current, value]);
    }
  };

  return (
    <div className="w-full bg-[#FDFDFB] border-r border-gray-100/60 h-full flex flex-col font-sans">
      {/* Search Section */}
      <div className="p-6 border-b border-gray-100/60">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search suppliers..." 
            value={filters.search || ''}
            onChange={(e) => onFilterChange('search', e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-transparent border border-gray-200 focus:border-[#0A3622] focus:ring-0 outline-none rounded-sm text-sm text-gray-800 placeholder:text-gray-400 transition-colors"
          />
        </div>
      </div>

      {/* Scrollable Filters */}
      <div className="flex-1 overflow-y-auto px-6 pb-20 custom-scrollbar">
        <Accordion title="Verification Tier" defaultOpen={true}>
          <div className="space-y-4">
            {tiers.map(tier => {
              const isChecked = (filters.tier || []).includes(tier);
              return (
                <label 
                  key={tier} 
                  className="flex items-start gap-3 cursor-pointer group"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleArrayFilter('tier', tier);
                  }}
                >
                  <div className={`relative mt-[3px] flex items-center justify-center w-4 h-4 border transition-colors duration-300 rounded-[2px] ${isChecked ? 'bg-[#0A3622] border-[#0A3622]' : 'bg-transparent border-gray-300 group-hover:border-[#0A3622]'}`}>
                    {isChecked && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-sm transition-colors duration-300 ${isChecked ? 'text-[#0A3622] font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                    {tier}
                  </span>
                </label>
              );
            })}
          </div>
        </Accordion>

        <Accordion title="Industry" defaultOpen={true}>
          <div className="space-y-4">
            {industries.map(industry => {
              const isChecked = (filters.industry || []).includes(industry);
              return (
                <label 
                  key={industry} 
                  className="flex items-start gap-3 cursor-pointer group"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleArrayFilter('industry', industry);
                  }}
                >
                  <div className={`relative mt-[3px] flex items-center justify-center w-4 h-4 border transition-colors duration-300 rounded-[2px] ${isChecked ? 'bg-[#0A3622] border-[#0A3622]' : 'bg-transparent border-gray-300 group-hover:border-[#0A3622]'}`}>
                    {isChecked && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-sm transition-colors duration-300 ${isChecked ? 'text-[#0A3622] font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                    {industry}
                  </span>
                </label>
              );
            })}
          </div>
        </Accordion>

        <Accordion title="Certifications" defaultOpen={false}>
          <div className="space-y-4">
            {certificationOptions.map(cert => {
              const isChecked = (filters.certifications || []).includes(cert);
              return (
                <label 
                  key={cert} 
                  className="flex items-start gap-3 cursor-pointer group"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleArrayFilter('certifications', cert);
                  }}
                >
                  <div className={`relative mt-[2px] flex items-center justify-center w-4 h-4 border transition-colors duration-300 rounded-[2px] ${isChecked ? 'bg-[#0A3622] border-[#0A3622]' : 'bg-transparent border-gray-300 group-hover:border-[#0A3622]'}`}>
                    {isChecked && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-sm transition-colors duration-300 ${isChecked ? 'text-[#0A3622] font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                    {cert}
                  </span>
                </label>
              );
            })}
          </div>
        </Accordion>

        <Accordion title="Lead Time (Days)" defaultOpen={true}>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex-1 relative">
              <input 
                type="number" 
                placeholder="Min" 
                value={filters.minLeadTime || ''}
                onChange={(e) => onFilterChange('minLeadTime', e.target.value ? Number(e.target.value) : '')}
                className="w-full px-3 py-2 bg-transparent border border-gray-200 focus:border-[#0A3622] focus:ring-0 outline-none rounded-sm text-sm text-gray-800 placeholder:text-gray-400 transition-colors"
                min="0"
              />
            </div>
            <span className="text-gray-300">-</span>
            <div className="flex-1 relative">
              <input 
                type="number" 
                placeholder="Max" 
                value={filters.maxLeadTime || ''}
                onChange={(e) => onFilterChange('maxLeadTime', e.target.value ? Number(e.target.value) : '')}
                className="w-full px-3 py-2 bg-transparent border border-gray-200 focus:border-[#0A3622] focus:ring-0 outline-none rounded-sm text-sm text-gray-800 placeholder:text-gray-400 transition-colors"
                min="0"
              />
            </div>
          </div>
        </Accordion>
      </div>
      
      {/* Footer Actions */}
      <div className="p-6 border-t border-gray-100/60 bg-[#FDFDFB]">
        <button 
          onClick={() => {
            onFilterChange('search', '');
            onFilterChange('industry', []);
            onFilterChange('tier', []);
            onFilterChange('certifications', []);
            onFilterChange('minLeadTime', '');
            onFilterChange('maxLeadTime', '');
          }}
          className="w-full py-2.5 px-4 text-sm font-medium text-[#0A3622] bg-[#FDFDFB] border border-[#0A3622] hover:bg-[#0A3622] hover:text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-sm"
          type="button"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
