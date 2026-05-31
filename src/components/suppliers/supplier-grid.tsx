'use client';

import { SupplierCard } from './supplier-card';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import type { Supplier } from '@/lib/types';
import { GridSkeleton } from '@/components/shared/loading-skeleton';

interface SupplierGridProps {
  suppliers: Supplier[];
  loading?: boolean;
}

export function SupplierGrid({ suppliers, loading }: SupplierGridProps) {
  if (loading) {
    return <GridSkeleton count={6} />;
  }

  if (suppliers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No suppliers found matching your criteria.</p>
      </div>
    );
  }

  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {suppliers.map((supplier, index) => (
        <StaggerItem key={supplier.id} index={index}>
          <SupplierCard supplier={supplier} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}