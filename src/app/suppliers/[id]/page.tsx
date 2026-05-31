import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SUPPLIERS } from '@/data/mock-suppliers';
import { SupplierProfile } from '@/components/suppliers/supplier-profile';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const supplier = SUPPLIERS.find((s) => s.id === id);

  if (!supplier) {
    return {
      title: 'Supplier Not Found',
    };
  }

  return {
    title: supplier.name,
    description: supplier.description.en,
    openGraph: {
      title: supplier.name,
      description: supplier.description.en,
      type: 'profile',
    },
  };
}

export async function generateStaticParams() {
  return SUPPLIERS.map((supplier) => ({
    id: supplier.id,
  }));
}

export default async function SupplierDetailPage({ params }: Props) {
  const { id } = await params;
  const supplier = SUPPLIERS.find((s) => s.id === id);

  if (!supplier) {
    notFound();
  }

  return <SupplierProfile supplier={supplier} />;
}