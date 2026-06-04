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
    subcategories: [
      { name: { en: 'T-Shirts & Polos', bn: 'টি-শার্ট এবং পোলো' }, icon: 'Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80' },
      { name: { en: 'Denim Jeans', bn: 'ডেনিম জিন্স' }, icon: 'Scissors', image: 'https://images.unsplash.com/photo-1542272604-780c8d5215af?w=400&q=80' },
      { name: { en: 'Activewear', bn: 'এক্টিভওয়্যার' }, icon: 'Activity', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80' },
      { name: { en: 'Sweaters', bn: 'সোয়েটার' }, icon: 'ShoppingBag', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80' },
      { name: { en: 'Yarn & Threads', bn: 'সুতা এবং থ্রেড' }, icon: 'Wind', image: 'https://images.unsplash.com/photo-1584820927503-c827988da151?w=400&q=80' },
      { name: { en: 'Accessories', bn: 'এক্সেসরিজ' }, icon: 'Watch', image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=400&q=80' }
    ]
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
    subcategories: [
      { name: { en: 'Jute Bags', bn: 'পাটের ব্যাগ' }, icon: 'ShoppingBag', image: 'https://images.unsplash.com/photo-1550175024-51e8df1cba10?w=400&q=80' },
      { name: { en: 'Raw Jute', bn: 'কাঁচা পাট' }, icon: 'Leaf', image: 'https://images.unsplash.com/photo-1533228913958-b80c55403e05?w=400&q=80' },
      { name: { en: 'Jute Yarn', bn: 'পাটের সুতা' }, icon: 'Wind', image: 'https://images.unsplash.com/photo-1605388055627-28d84424ce17?w=400&q=80' },
      { name: { en: 'Eco Packaging', bn: 'ইকো প্যাকেজিং' }, icon: 'Package', image: 'https://images.unsplash.com/photo-1607344645866-009c520c6c6b?w=400&q=80' },
      { name: { en: 'Jute Crafts', bn: 'পাটের কারুশিল্প' }, icon: 'Gift', image: 'https://images.unsplash.com/photo-1583845017004-9a8451b682b1?w=400&q=80' }
    ]
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
    subcategories: [
      { name: { en: 'Men\'s Shoes', bn: 'ছেলেদের জুতা' }, icon: 'Footprints', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80' },
      { name: { en: 'Women\'s Shoes', bn: 'মেয়েদের জুতা' }, icon: 'Footprints', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80' },
      { name: { en: 'Leather Bags', bn: 'চামড়ার ব্যাগ' }, icon: 'Briefcase', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80' },
      { name: { en: 'Wallets & Belts', bn: 'মানিব্যাগ এবং বেল্ট' }, icon: 'CreditCard', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80' },
      { name: { en: 'Raw Leather', bn: 'কাঁচা চামড়া' }, icon: 'Layers', image: 'https://images.unsplash.com/photo-1588165683490-67123fbcf006?w=400&q=80' }
    ]
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
    subcategories: [
      { name: { en: 'Generic Drugs', bn: 'জেনেরিক ড্রাগস' }, icon: 'Pills', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80' },
      { name: { en: 'Active Ingredients', bn: 'সক্রিয় উপাদান' }, icon: 'FlaskConical', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80' },
      { name: { en: 'Medical Supplies', bn: 'মেডিকেল সাপ্লাই' }, icon: 'Stethoscope', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&q=80' },
      { name: { en: 'Vitamins', bn: 'ভিটামিন' }, icon: 'HeartPulse', image: 'https://images.unsplash.com/photo-1550572017-edb73a38ea6c?w=400&q=80' }
    ]
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
    subcategories: [
      { name: { en: 'Tableware', bn: 'টেবিলওয়্যার' }, icon: 'Coffee', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&q=80' },
      { name: { en: 'Ceramic Tiles', bn: 'সিরামিক টাইলস' }, icon: 'LayoutGrid', image: 'https://images.unsplash.com/photo-1523363363402-999ddcfa9cf8?w=400&q=80' },
      { name: { en: 'Sanitary Ware', bn: 'স্যানিটারি ওয়্যার' }, icon: 'Bath', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80' },
      { name: { en: 'Glass Products', bn: 'কাচ পণ্য' }, icon: 'GlassWater', image: 'https://images.unsplash.com/photo-1579541592065-ad039bb81005?w=400&q=80' }
    ]
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
    subcategories: [
      { name: { en: 'Frozen Shrimp', bn: 'হিমায়িত চিংড়ি' }, icon: 'Fish', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&q=80' },
      { name: { en: 'Freshwater Fish', bn: 'মিঠা পানির মাছ' }, icon: 'Waves', image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=400&q=80' },
      { name: { en: 'Frozen Snacks', bn: 'ফ্রোজেন স্ন্যাকস' }, icon: 'Utensils', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80' },
      { name: { en: 'Processed Fruits', bn: 'প্রক্রিয়াজাত ফল' }, icon: 'Apple', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80' }
    ]
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
    subcategories: [
      { name: { en: 'Bed Linens', bn: 'বিছানার লিনেন' }, icon: 'BedDouble', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80' },
      { name: { en: 'Curtains', bn: 'পর্দা' }, icon: 'Blinds', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80' },
      { name: { en: 'Towels', bn: 'তোয়ালে' }, icon: 'Droplets', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80' },
      { name: { en: 'Rugs & Mats', bn: 'রাগস এবং ম্যাট' }, icon: 'Layers', image: 'https://images.unsplash.com/photo-1533758364538-4e897910aa18?w=400&q=80' }
    ]
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
    subcategories: [
      { name: { en: 'Tea & Coffee', bn: 'চা এবং কফি' }, icon: 'Coffee', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400&q=80' },
      { name: { en: 'Spices', bn: 'মসলা' }, icon: 'Flame', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80' },
      { name: { en: 'Rice & Grains', bn: 'চাল এবং শস্য' }, icon: 'Wheat', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80' },
      { name: { en: 'Fresh Produce', bn: 'তাজা পণ্য' }, icon: 'Carrot', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80' }
    ]
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
