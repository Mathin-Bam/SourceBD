// Mock Categories
import type { Category } from '@/lib/types';

export const CATEGORIES: Category[] = [
  {
    id: 'textiles',
    name: { en: 'Textiles & RMG', bn: 'টেক্সটাইল ও তৈরি পোশাক' },
    description: {
      en: 'Garments, fabrics, yarn, and fashion accessories',
      bn: 'গার্মেন্টস, ফ্যাব্রিক, সুতা এবং ফ্যাশন এক্সেসরিজ',
    },
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80',
    icon: 'Shirt',
    count: 847,
    featured: true,
  },
  {
    id: 'jute',
    name: { en: 'Jute & Packaging', bn: 'পাট ও প্যাকেজিং' },
    description: {
      en: 'Raw jute, jute products, and eco-friendly packaging',
      bn: 'কাঁচা পাট, পাট পণ্য এবং পরিবেশবান্ধব প্যাকেজিং',
    },
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&q=80',
    icon: 'Package',
    count: 234,
    featured: true,
  },
  {
    id: 'leather',
    name: { en: 'Leather & Footwear', bn: 'চামড়া ও জুতা' },
    description: {
      en: 'Leather goods, footwear, and accessories',
      bn: 'চামড়ার পণ্য, জুতা এবং এক্সেসরিজ',
    },
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    icon: 'Briefcase',
    count: 156,
    featured: true,
  },
  {
    id: 'pharma',
    name: { en: 'Pharmaceuticals', bn: 'ফার্মাসিউটিক্যালস' },
    description: {
      en: 'Generic medicines, active ingredients, and medical supplies',
      bn: 'জেনেরিক ওষুধ, সক্রিয় উপাদান এবং মেডিকেল সরঞ্জাম',
    },
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    icon: 'Pill',
    count: 78,
    featured: false,
  },
  {
    id: 'ceramics',
    name: { en: 'Ceramics & Glass', bn: 'সিরামিক ও কাচ' },
    description: {
      en: 'Tableware, tiles, sanitary ware, and glass products',
      bn: 'টেবিলওয়্যার, টাইলস, স্যানিটারি ওয়্যার এবং কাচ পণ্য',
    },
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
    icon: 'Gem',
    count: 89,
    featured: false,
  },
  {
    id: 'frozen',
    name: { en: 'Frozen Foods & Seafood', bn: 'ফ্রোজেন খাবার ও সামুদ্রিক' },
    description: {
      en: 'Shrimp, fish, fruits, and processed foods',
      bn: 'চিংড়ি, মাছ, ফল এবং প্রক্রিয়াজাত খাবার',
    },
    image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=800&q=80',
    icon: 'Fish',
    count: 312,
    featured: true,
  },
  {
    id: 'home-textiles',
    name: { en: 'Home Textiles', bn: 'হোম টেক্সটাইল' },
    description: {
      en: 'Bed linens, curtains, towels, and home decor',
      bn: 'বিছানার লিনেন, পর্দা, তোয়ালে এবং হোম ডেকর',
    },
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    icon: 'Home',
    count: 198,
    featured: false,
  },
  {
    id: 'agro',
    name: { en: 'Agro Products', bn: 'কৃষি পণ্য' },
    description: {
      en: 'Tea, spices, rice, and agricultural commodities',
      bn: 'চা, মসলা, চাল এবং কৃষি পণ্য',
    },
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
    icon: 'Wheat',
    count: 445,
    featured: false,
  },
];

export const DIVISIONS = [
  'Dhaka',
  'Chittagong',
  'Rajshahi',
  'Khulna',
  'Sylhet',
  'Barisal',
  'Rangpur',
  'Mymensingh',
] as const;

export const CERTIFICATIONS = [
  'ISO 9001',
  'ISO 14001',
  'GOTS',
  'OEKO-TEX',
  'WRAP',
  'BSCI',
  ' SEDEX',
  'BCI',
  'GRS',
  'FDA',
  'WHO-GMP',
] as const;
