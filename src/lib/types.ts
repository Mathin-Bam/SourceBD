// Core Types for SourceBD

export type VerificationTier = 'Basic' | 'Verified' | 'Gold' | 'Platinum';
export type VerifiedTier = 'bronze' | 'silver' | 'gold' | 'platinum';
export type Sector = 'rmg' | 'leather' | 'jute' | 'pharma' | 'ceramics' | 'agro';
export type RFQStatus = 'pending' | 'quoted' | 'accepted' | 'expired';
export type OrderStatus = 'processing' | 'in_production' | 'shipped' | 'delivered';
export type Language = 'en' | 'bn';

export interface LocalizedString {
  en: string;
  bn: string;
}

export interface Location {
  city: string;
  division: string;
  bd: true;
}

export interface Supplier {
  id: string;
  name: string;
  nameBn: string;
  tier: VerificationTier;
  category: string;
  location: Location;
  yearEstablished: number;
  employees: number;
  annualRevenue: string;
  description: LocalizedString;
  certifications: string[];
  moq: string;
  avgLeadTime: string;
  products: string[];
  rating: number;
  responseRate: number;
  verified: boolean;
  contact: {
    email: string;
    phone: string;
    whatsapp?: string;
  };
  logo?: string;
  banner?: string;
  featured?: boolean;
}

export interface Specification {
  label: LocalizedString;
  value: LocalizedString;
}

export interface PriceRange {
  min: number;
  max: number;
  currency: 'BDT';
  unit: string;
}

export interface Product {
  id: string;
  name: LocalizedString;
  supplierId: string;
  supplierName?: string;
  category: string;
  images: string[];
  specifications: Specification[];
  moq: string;
  priceRange: PriceRange;
  certifications: string[];
  sku: string;
  featured: boolean;
  description?: LocalizedString;
  
  // New optional fields for rich PDP
  videoUrl?: string;
  tieredPrices?: { minQty: number; maxQty?: number; price: number }[];
  variations?: { name: LocalizedString; options: LocalizedString[] }[];
  customizationOptions?: { label: LocalizedString; minOrder: number }[];
  faqs?: { question: LocalizedString; answer: LocalizedString }[];
  reviews?: { rating: number; count: number; items: any[] };
}

export interface Category {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
  icon: string;
  count: number;
  featured?: boolean;
}

export interface Quote {
  supplierId: string;
  supplierName: string;
  price: number;
  currency: 'BDT';
  leadTime: string;
  validUntil: string;
  message?: string;
}

export interface RFQ {
  id: string;
  productName: LocalizedString;
  quantity: number;
  targetPrice: number;
  status: RFQStatus;
  createdAt: string;
  expiresAt: string;
  quotes: Quote[];
  buyerId: string;
  category: string;
}

export interface TimelineEvent {
  date: string;
  status: string;
  note: string;
}

export interface Order {
  id: string;
  productId: string;
  productName: string;
  supplierId: string;
  supplierName: string;
  quantity: number;
  unitPrice: number;
  total: number;
  currency: 'BDT';
  status: OrderStatus;
  createdAt: string;
  timeline: TimelineEvent[];
}

// Dashboard Stats
export interface BuyerStats {
  activeRFQs: number;
  pendingQuotes: number;
  acceptedOrders: number;
  totalSpent: number;
}

export interface SupplierStats {
  totalInquiries: number;
  productsListed: number;
  activeOrders: number;
  responseRate: number;
  monthlyRFQs: number[];
  monthlyOrders: number[];
}

// Navigation
export interface NavItem {
  label: LocalizedString;
  href: string;
  children?: NavItem[];
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  productInterest?: string;
}

export interface RFQFormData {
  productName: LocalizedString;
  category: string;
  quantity: number;
  targetPrice?: number;
  message: string;
  deliveryDate?: string;
}