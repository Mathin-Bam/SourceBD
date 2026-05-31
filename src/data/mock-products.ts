// Mock Products
import type { Product } from '@/lib/types';

export const PRODUCTS: Product[] = [
  // Textiles - Apex Textiles
  {
    id: 'prod-001',
    name: { en: 'Organic Cotton Polo Shirt', bn: 'অর্গানিক কটন পোলো শার্ট' },
    supplierId: 'sup-001',
    supplierName: 'Apex Footwear Ltd.',
    category: 'textiles',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Material', bn: 'উপাদান' }, value: { en: '100% GOTS Organic Cotton', bn: '১০০% GOTS অর্গানিক তুলা' } },
      { label: { en: 'GSM', bn: 'জিএসএম' }, value: { en: '180-220', bn: '১৮০-২২০' } },
      { label: { en: 'Sizes', bn: 'সাইজ' }, value: { en: 'S, M, L, XL, XXL', bn: 'এস, এম, এল, এক্সএল, এক্সএক্সএল' } },
      { label: { en: 'Colors', bn: 'রঙ' }, value: { en: 'Custom colors available', bn: 'কাস্টম রঙ পাওয়া যায়' } },
    ],
    moq: '1,000 pieces',
    priceRange: { min: 180, max: 320, currency: 'BDT', unit: 'per piece' },
    certifications: ['GOTS', 'OEKO-TEX'],
    sku: 'APX-POLO-001',
    featured: true,
    description: {
      en: 'Premium organic cotton polo shirt suitable for corporate uniforms, retail, and promotional wear. Available in custom colors and branding options.',
      bn: 'কর্পোরেট ইউনিফর্ম, রিটেইল এবং প্রোমোশনাল পোশাকের জন্য উপযুক্ত প্রিমিয়াম অর্গানিক কটন পোলো শার্ট। কাস্টম রঙ এবং ব্র্যান্ডিং বিকল্প পাওয়া যায়।',
    },
    tieredPrices: [
      { minQty: 1000, maxQty: 4999, price: 320 },
      { minQty: 5000, maxQty: 9999, price: 250 },
      { minQty: 10000, price: 180 },
    ],
    variations: [
      {
        name: { en: 'Color', bn: 'রঙ' },
        options: [
          { en: 'Navy Blue', bn: 'নেভি ব্লু' },
          { en: 'Black', bn: 'কালো' },
          { en: 'White', bn: 'সাদা' },
          { en: 'Olive Green', bn: 'অলিভ গ্রিন' }
        ]
      },
      {
        name: { en: 'Size', bn: 'সাইজ' },
        options: [
          { en: 'S', bn: 'এস' },
          { en: 'M', bn: 'এম' },
          { en: 'L', bn: 'এল' },
          { en: 'XL', bn: 'এক্সএল' },
          { en: 'XXL', bn: 'এক্সএক্সএল' }
        ]
      }
    ],
    customizationOptions: [
      { label: { en: 'Custom Logo Embroidery', bn: 'কাস্টম লোগো এমব্রয়ডারি' }, minOrder: 1000 },
      { label: { en: 'Custom Care Label', bn: 'কাস্টম কেয়ার লেবেল' }, minOrder: 2000 },
      { label: { en: 'Custom Packaging Box', bn: 'কাস্টম প্যাকেজিং বক্স' }, minOrder: 5000 }
    ],
    faqs: [
      {
        question: { en: 'Can I get a sample before bulk order?', bn: 'আমি কি বাল্ক অর্ডারের আগে নমুনা পেতে পারি?' },
        answer: { en: 'Yes, we provide samples. Sample cost is refunded upon placing a bulk order of 5000+ pieces.', bn: 'হ্যাঁ, আমরা নমুনা প্রদান করি। ৫০০০+ পিসের বাল্ক অর্ডার দিলে নমুনা খরচ ফেরত দেওয়া হয়।' }
      },
      {
        question: { en: 'What is the lead time for 10,000 pieces?', bn: '১০,০০০ পিসের জন্য লিড টাইম কত?' },
        answer: { en: 'Standard lead time for 10k pieces is 45-60 days depending on the customization required.', bn: '১০ হাজার পিসের জন্য স্ট্যান্ডার্ড লিড টাইম কাস্টমাইজেশনের উপর নির্ভর করে ৪৫-৬০ দিন।' }
      }
    ],
    reviews: {
      rating: 4.8,
      count: 124,
      items: []
    }
  },
  {
    id: 'prod-002',
    name: { en: 'Sustainable Bamboo T-Shirt', bn: 'টেকসই বাঁশের টি-শার্ট' },
    supplierId: 'sup-001',
    supplierName: 'Apex Footwear Ltd.',
    category: 'textiles',
    images: [
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Material', bn: 'উপাদান' }, value: { en: '70% Bamboo, 30% Organic Cotton', bn: '৭০% বাঁশ, ৩০% অর্গানিক কটন' } },
      { label: { en: 'Weight', bn: 'ওজন' }, value: { en: '140 GSM', bn: '১৪০ জিএসএম' } },
      { label: { en: 'Features', bn: 'বৈশিষ্ট্য' }, value: { en: 'Anti-bacterial, moisture-wicking', bn: 'অ্যান্টি-ব্যাকটেরিয়াল, ময়েশ্চার-উইকিং' } },
    ],
    moq: '2,000 pieces',
    priceRange: { min: 220, max: 380, currency: 'BDT', unit: 'per piece' },
    certifications: ['OEKO-TEX', 'FSC'],
    sku: 'APX-BAM-002',
    featured: false,
    description: {
      en: 'Eco-friendly bamboo blend t-shirt with natural antibacterial properties. Perfect for sustainable fashion brands.',
      bn: 'প্রাকৃতিক অ্যান্টিব্যাকটেরিয়াল বৈশিষ্ট্য সহ পরিবেশবান্ধব বাঁশ মিশ্রণ টি-শার্ট। টেকসই ফ্যাশন ব্র্যান্ডগুলির জন্য নিখুঁত।',
    },
  },
  {
    id: 'prod-003',
    name: { en: 'Recycled Polyester Jacket', bn: 'রিসাইক্লড পলিস্টার জ্যাকেট' },
    supplierId: 'sup-001',
    supplierName: 'Apex Footwear Ltd.',
    category: 'textiles',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Material', bn: 'উপাদান' }, value: { en: '100% Recycled Polyester (rPET)', bn: '১০০% রিসাইক্লড পলিস্টার (rPET)' } },
      { label: { en: 'Water Resistance', bn: 'ওয়াটার রেজিস্ট্যান্স' }, value: { en: '5,000mm water column', bn: '৫,০০০ মিমি ওয়াটার কলাম' } },
      { label: { en: 'Breathability', bn: 'শ্বাস নেওয়ার ক্ষমতা' }, value: { en: '5,000g/m²/24hr', bn: '৫,০০০g/m²/24 ঘন্টা' } },
    ],
    moq: '500 pieces',
    priceRange: { min: 850, max: 1200, currency: 'BDT', unit: 'per piece' },
    certifications: ['GRS', 'bluesign'],
    sku: 'APX-RCY-003',
    featured: true,
    description: {
      en: 'Performance jacket made from recycled plastic bottles. Features waterproof/breathable membrane for outdoor activities.',
      bn: 'রিসাইক্লড প্লাস্টিক বোতল থেকে তৈরি পারফরম্যান্স জ্যাকেট। আউটডোর অ্যাক্টিভিটির জন্য ওয়াটারপ্রুফ/ব্রেথেবল মেমব্রেন বৈশিষ্ট্য।',
    },
  },
  // Jute Products
  {
    id: 'prod-004',
    name: { en: 'Eco-Friendly Jute Shopping Bag', bn: 'পরিবেশবান্ধব পাট শপিং ব্যাগ' },
    supplierId: 'sup-002',
    supplierName: 'Mirpur Jute Mills Ltd.',
    category: 'jute',
    images: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Material', bn: 'উপাদান' }, value: { en: '100% Natural Jute', bn: '১০০% প্রাকৃতিক পাট' } },
      { label: { en: 'Size', bn: 'সাইজ' }, value: { en: '38x42x12 cm', bn: '৩৮x৪২x১২ সেমি' } },
      { label: { en: 'Weight Capacity', bn: 'ওজন ক্ষমতা' }, value: { en: 'Up to 15 kg', bn: '১৫ কেজি পর্যন্ত' } },
      { label: { en: 'Printing', bn: 'প্রিন্টিং' }, value: { en: 'Screen print, offset print available', bn: 'স্ক্রিন প্রিন্ট, অফসেট প্রিন্ট পাওয়া যায়' } },
    ],
    moq: '1,000 pieces',
    priceRange: { min: 45, max: 95, currency: 'BDT', unit: 'per piece' },
    certifications: ['ISO 14001', 'BCI'],
    sku: 'MJM-BAG-004',
    featured: true,
    description: {
      en: 'Handmade natural jute shopping bag. Perfect for retail branding, corporate gifts, and eco-conscious consumers.',
      bn: 'হ্যান্ডমেড প্রাকৃতিক পাট শপিং ব্যাগ। রিটেইল ব্র্যান্ডিং, কর্পোরেট গিফট এবং পরিবেশ সচেতন ভোক্তাদের জন্য নিখুঁত।',
    },
  },
  {
    id: 'prod-005',
    name: { en: 'Laminated Jute Sack', bn: 'ল্যামিনেটেড পাট স্যাক' },
    supplierId: 'sup-002',
    supplierName: 'Mirpur Jute Mills Ltd.',
    category: 'jute',
    images: [
      'https://images.unsplash.com/photo-158Coalec1c-b7f3-4c45-b6f3-7a8686391e65?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Material', bn: 'উপাদান' }, value: { en: 'Laminated Jute Fabric', bn: 'ল্যামিনেটেড পাট ফ্যাব্রিক' } },
      { label: { en: 'GSM', bn: 'জিএসএম' }, value: { en: '300-400', bn: '৩০০-৪০০' } },
      { label: { en: 'Moisture Barrier', bn: 'আর্দ্রতা বাধা' }, value: { en: 'Yes - PE lamination', bn: 'হ্যাঁ - PE ল্যামিনেশন' } },
    ],
    moq: '5,000 pieces',
    priceRange: { min: 85, max: 140, currency: 'BDT', unit: 'per piece' },
    certifications: ['ISO 9001'],
    sku: 'MJM-SACK-005',
    featured: false,
    description: {
      en: 'Industrial-grade laminated jute sack for packaging grains, seeds, and agricultural products. Reusable and biodegradable.',
      bn: 'দানাশস্য, বীজ এবং কৃষি পণ্য প্যাকেজিংয়ের জন্য শিল্প-গ্রেড ল্যামিনেটেড পাট স্যাক। পুনঃব্যবহারযোগ্য এবং জৈব-ক্ষয়যোগ্য।',
    },
  },
  // Leather Products
  {
    id: 'prod-006',
    name: { en: 'Full Grain Leather Briefcase', bn: 'ফুল গ্রেইন লেদার ব্রিফকেস' },
    supplierId: 'sup-003',
    supplierName: 'Bengal Leather Works',
    category: 'leather',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Material', bn: 'উপাদান' }, value: { en: 'Full Grain Buffalo Leather', bn: 'ফুল গ্রেইন মহিষের চামড়া' } },
      { label: { en: 'Dimensions', bn: 'মাত্রা' }, value: { en: '40x30x10 cm', bn: '৪০x৩০x১০ সেমি' } },
      { label: { en: 'Hardware', bn: 'হার্ডওয়্যার' }, value: { en: 'Brass YKK zippers', bn: 'পিতল YKK জিপার' } },
      { label: { en: 'Lining', bn: 'লাইনিং' }, value: { en: 'Cotton twill lining', bn: 'কটন টুইল লাইনিং' } },
    ],
    moq: '100 pieces',
    priceRange: { min: 2200, max: 3800, currency: 'BDT', unit: 'per piece' },
    certifications: ['LWG Gold'],
    sku: 'BLW-BR-006',
    featured: true,
    description: {
      en: 'Handcrafted full grain leather briefcase with brass hardware. Features laptop compartment and multiple organizational pockets.',
      bn: 'পিতল হার্ডওয়্যার সহ হ্যান্ডক্রাফ্টেড ফুল গ্রেইন লেদার ব্রিফকেস। ল্যাপটপ কম্পার্টমেন্ট এবং একাধিক সাংগঠনিক পকেট রয়েছে।',
    },
  },
  {
    id: 'prod-007',
    name: { en: 'Handmade Leather Belt', bn: 'হ্যান্ডমেড লেদার বেল্ট' },
    supplierId: 'sup-003',
    supplierName: 'Bengal Leather Works',
    category: 'leather',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Material', bn: 'উপাদান' }, value: { en: 'Vegetable Tanned Leather', bn: 'ভেজিটেবল ট্যানড লেদার' } },
      { label: { en: 'Width', bn: 'প্রস্থ' }, value: { en: '35mm or 40mm', bn: '৩৫মিমি বা ৪০মিমি' } },
      { label: { en: 'Buckle', bn: 'বাকল' }, value: { en: 'Solid brass, nickel-free', bn: 'সলিড পিতল, নিকেল-মুক্ত' } },
    ],
    moq: '200 pieces',
    priceRange: { min: 550, max: 850, currency: 'BDT', unit: 'per piece' },
    certifications: ['LWG Gold', 'REACH'],
    sku: 'BLW-BLT-007',
    featured: false,
    description: {
      en: 'Classic hand-stitched leather belt in natural tan. Premium solid brass buckle with antique finish.',
      bn: 'প্রাকৃতিক তান রঙে ক্লাসিক হ্যান্ড-স্টিচড লেদার বেল্ট। অ্যান্টিক ফিনিশ সহ প্রিমিয়াম সলিড পিতল বাকল।',
    },
  },
  // Frozen Seafood
  {
    id: 'prod-008',
    name: { en: 'Premium Black Tiger Shrimp', bn: 'প্রিমিয়াম ব্ল্যাক টাইগার চিংড়ি' },
    supplierId: 'sup-004',
    supplierName: 'Khulna Frozen Seafood Co.',
    category: 'frozen',
    images: [
      'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Species', bn: 'প্রজাতি' }, value: { en: 'Penaeus monodon', bn: 'পেনাস মোনোডন' } },
      { label: { en: 'Size', bn: 'সাইজ' }, value: { en: '16/20, 21/25, 26/30 per lb', bn: 'প্রতি পাউন্ডে ১৬/২০, ২১/২৫, ২৬/৩০' } },
      { label: { en: 'Processing', bn: 'প্রক্রিয়াকরণ' }, value: { en: 'IQF, HOSO/HOBO', bn: 'IQF, HOSO/HOBO' } },
      { label: { en: 'Packaging', bn: 'প্যাকেজিং' }, value: { en: '10x1lb, 20x1lb, bulk', bn: '১০x১ পাউন্ড, ২০x১ পাউন্ড, বাল্ক' } },
    ],
    moq: '5 metric tons',
    priceRange: { min: 650, max: 950, currency: 'BDT', unit: 'per kg' },
    certifications: ['HACCP', 'FDA', 'EU Approved'],
    sku: 'KFS-SHW-008',
    featured: true,
    description: {
      en: 'Premium grade black tiger shrimp, wild-caught from Bay of Bengal. IQF for easy portion control. EU and FDA approved processing facility.',
      bn: 'বঙ্গোপসাগর থেকে সামুদ্রিক প্রিমিয়াম গ্রেড ব্ল্যাক টাইগার চিংড়ি। সহজ পোশন কন্ট্রোলের জন্য IQF। EU এবং FDA অনুমোদিত প্রসেসিং সুবিধা।',
    },
  },
  {
    id: 'prod-009',
    name: { en: 'Frozen Hilsa Fish (Ilish)', bn: 'ফ্রোজেন ইলিশ মাছ' },
    supplierId: 'sup-004',
    supplierName: 'Khulna Frozen Seafood Co.',
    category: 'frozen',
    images: [
      'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Species', bn: 'প্রজাতি' }, value: { en: 'Tenualosa ilisha', bn: 'টেনুয়ালোসা ইলিশা' } },
      { label: { en: 'Weight', bn: 'ওজন' }, value: { en: '500g-1kg, 1kg-2kg, 2kg+', bn: '৫০০গ্রাম-১কেজি, ১কেজি-২কেজি, ২কেজি+' } },
      { label: { en: 'Form', bn: 'ফর্ম' }, value: { en: 'Whole round, gutted, steaks', bn: 'পুরো গোল, অন্ত্র বাদ, স্টেক' } },
    ],
    moq: '3 metric tons',
    priceRange: { min: 450, max: 750, currency: 'BDT', unit: 'per kg' },
    certifications: ['HACCP', 'ISO 22000'],
    sku: 'KFS-HLS-009',
    featured: false,
    description: {
      en: 'Premium Hilsa fish (Ilish) - Bangladesh\'s national fish. Catch from Padma-Brahmaputra river system. Flash frozen to preserve freshness.',
      bn: 'প্রিমিয়াম ইলিশ মাছ - বাংলাদেশের জাতীয় মাছ। পদ্মা-ব্রহ্মপুত্র নদী ব্যবস্থা থেকে ধরা। তাজাবন্ধ রাখতে ফ্ল্যাশ ফ্রোজেন।',
    },
  },
  // More products for other suppliers...
  {
    id: 'prod-010',
    name: { en: 'Ceramic Dinner Set - 16 Pieces', bn: 'সিরামিক ডিনার সেট - ১৬ পিস' },
    supplierId: 'sup-005',
    supplierName: 'Rajshahi Ceramics Factory',
    category: 'ceramics',
    images: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Pieces', bn: 'পিস' }, value: { en: '4 dinner plates, 4 salad plates, 4 bowls, 4 mugs', bn: '৪ ডিনার প্লেট, ৪ স্যালাড প্লেট, ৪ বাউল, ৪ মগ' } },
      { label: { en: 'Material', bn: 'উপাদান' }, value: { en: 'High-grade stoneware', bn: 'হাই-গ্রেড স্টোনওয়্যার' } },
      { label: { en: 'Dishwasher Safe', bn: 'ডিশওয়াশার সেফ' }, value: { en: 'Yes', bn: 'হ্যাঁ' } },
    ],
    moq: '100 sets',
    priceRange: { min: 1800, max: 2800, currency: 'BDT', unit: 'per set' },
    certifications: ['ISO 9001'],
    sku: 'RCF-DSN-010',
    featured: false,
    description: {
      en: 'Elegant 16-piece ceramic dinner set with contemporary design. Dishwasher and microwave safe.',
      bn: 'সমসাময়িক নকশা সহ ১৬ পিস সিরামিক ডিনার সেট। ডিশওয়াশার এবং মাইক্রোওয়েভ সেফ।',
    },
  },
  {
    id: 'prod-012',
    name: { en: 'Metformin 500mg Tablets', bn: 'মেটফর্মিন ৫০০মিগ্রা ট্যাবলেট' },
    supplierId: 'sup-006',
    supplierName: 'Delta Pharmaceuticals Ltd.',
    category: 'pharma',
    images: [
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Strength', bn: 'শক্তি' }, value: { en: '500mg', bn: '৫০০মিগ্রা' } },
      { label: { en: 'Form', bn: 'ফর্ম' }, value: { en: 'Tablet', bn: 'ট্যাবলেট' } },
      { label: { en: 'Packaging', bn: 'প্যাকেজিং' }, value: { en: '10x10 blisters per box', bn: 'প্রতি বাক্সে ১০x১০ ব্লিস্টার' } },
      { label: { en: 'Shelf Life', bn: 'শেল্ফ লাইফ' }, value: { en: '3 years', bn: '৩ বছর' } },
    ],
    moq: '100,000 tablets',
    priceRange: { min: 0.85, max: 1.20, currency: 'BDT', unit: 'per tablet' },
    certifications: ['WHO-GMP', 'FDA', 'EU-GMP'],
    sku: 'DPH-MET-012',
    featured: true,
    description: {
      en: 'WHO-GMP certified Metformin HCl tablets for diabetes management. Exported to 30+ countries.',
      bn: 'ডায়াবেটিস ব্যবস্থাপনার জন্য WHO-GMP সার্টিফাইড মেটফর্মিন HCl ট্যাবলেট। ৩০+ দেশে রপ্তানি করা হয়।',
    },
  },
  {
    id: 'prod-016',
    name: { en: 'Premium Orthodox Tea - SFTGFOP1', bn: 'প্রিমিয়াম অর্থোডক্স চা - SFTGFOP1' },
    supplierId: 'sup-008',
    supplierName: 'Sylhet Tea Gardens Ltd.',
    category: 'agro',
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Grade', bn: 'গ্রেড' }, value: { en: 'SFTGFOP1 (Super Fine Tippy Golden Flowery Orange Pekoe)', bn: 'SFTGFOP1 (সুপার ফাইন টিপি গোল্ডেন ফ্লাওয়ারি অরেঞ্জ পেকো)' } },
      { label: { en: 'Origin', bn: 'উৎস' }, value: { en: 'Sylhet Tea Gardens, Bangladesh', bn: 'সিলেট টি গার্ডেনস, বাংলাদেশ' } },
      { label: { en: 'Process', bn: 'প্রক্রিয়া' }, value: { en: 'Hand-rolled Orthodox', bn: 'হ্যান্ড-রোলড অর্থোডক্স' } },
    ],
    moq: '100 kg',
    priceRange: { min: 850, max: 1200, currency: 'BDT', unit: 'per kg' },
    certifications: ['Organic', 'Rainforest Alliance'],
    sku: 'STG-ORT-016',
    featured: false,
    description: {
      en: 'Premium single-origin Orthodox tea from Sylhet highlands. Hand-rolled for exceptional flavor and aroma.',
      bn: 'সিলেট উচ্চভূমি থেকে প্রিমিয়াম সিঙ্গেল-অরিজিন অর্থোডক্স চা। অসাধারণ স্বাদ এবং সুগন্ধের জন্য হ্যান্ড-রোলড।',
    },
  },
  // More products for demo purposes
  {
    id: 'prod-020',
    name: { en: 'Premium Selvedge Denim - 14oz', bn: 'প্রিমিয়াম সেলভেজ ডেনিম - ১৪আউন্স' },
    supplierId: 'sup-010',
    supplierName: 'Savar Denim Mills',
    category: 'textiles',
    images: [
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80',
    ],
    specifications: [
      { label: { en: 'Weight', bn: 'ওজন' }, value: { en: '14 oz/sq yard', bn: '১৪ আউন্স/স্কয়ার ইয়ার্ড' } },
      { label: { en: 'Width', bn: 'প্রস্থ' }, value: { en: '32-36 inches', bn: '৩২-৩৬ ইঞ্চি' } },
      { label: { en: 'Weave', bn: 'ওভ' }, value: { en: 'Right hand twill', bn: 'রাইট হ্যান্ড টুইল' } },
    ],
    moq: '3,000 meters',
    priceRange: { min: 185, max: 240, currency: 'BDT', unit: 'per meter' },
    certifications: ['GOTS', 'BCI'],
    sku: 'SDM-DNM-020',
    featured: true,
    description: {
      en: 'Premium Japanese-style selvedge denim woven on vintage shuttle looms. Perfect for premium jeans brands.',
      bn: 'ভিন্টেজ শাটল লুমে বোনা প্রিমিয়াম জাপানি-স্টাইল সেলভেজ ডেনিম। প্রিমিয়াম জিনস ব্র্যান্ডগুলির জন্য নিখুঁত।',
    },
  },
];

export const getProductsBySupplier = (supplierId: string) =>
  PRODUCTS.filter(p => p.supplierId === supplierId);

export const getProductsByCategory = (category: string) =>
  PRODUCTS.filter(p => p.category === category);

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.featured);
export const getProductById = (id: string) => PRODUCTS.find(p => p.id === id);
