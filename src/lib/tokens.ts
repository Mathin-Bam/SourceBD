// Brand Tokens as JS constants for programmatic access

export const BRAND_COLORS = {
  bengalForest: '#0f2417',
  padmaGreen: '#1a7a4a',
  loomGold: '#f5c842',
  flagRed: '#c0392b',
  juteCream: '#f7f3eb',
  mintMist: '#e8f5ee',
  white: '#ffffff',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
} as const;

export const TIER_COLORS = {
  Basic: { bg: BRAND_COLORS.gray100, text: BRAND_COLORS.gray600 },
  Verified: { bg: BRAND_COLORS.mintMist, text: BRAND_COLORS.padmaGreen },
  Gold: { bg: BRAND_COLORS.loomGold, text: BRAND_COLORS.bengalForest },
  Platinum: { bg: BRAND_COLORS.bengalForest, text: BRAND_COLORS.white },
} as const;

export const STATUS_COLORS = {
  pending: { bg: BRAND_COLORS.gray100, text: BRAND_COLORS.gray600 },
  quoted: { bg: BRAND_COLORS.loomGold, text: BRAND_COLORS.bengalForest },
  accepted: { bg: BRAND_COLORS.mintMist, text: BRAND_COLORS.padmaGreen },
  expired: { bg: '#fee2e2', text: BRAND_COLORS.flagRed },
  processing: { bg: '#dbeafe', text: '#1e40af' },
  in_production: { bg: '#fef3c7', text: '#92400e' },
  shipped: { bg: '#d1fae5', text: BRAND_COLORS.padmaGreen },
  delivered: { bg: BRAND_COLORS.mintMist, text: BRAND_COLORS.padmaGreen },
} as const;

import type { VerificationTier, VerifiedTier, Sector } from '@/lib/types';

export const VERIFIED_TIER_COLORS = {
  bronze: {
    bg: '#f7f3eb',
    text: '#92400e',
    border: '#d97706',
    glow: 'rgba(217, 119, 6, 0.3)',
  },
  silver: {
    bg: '#f1f5f9',
    text: '#475569',
    border: '#94a3b8',
    glow: 'rgba(148, 163, 184, 0.3)',
  },
  gold: {
    bg: '#fef3c7',
    text: '#92400e',
    border: '#f5c842',
    glow: 'rgba(245, 200, 66, 0.4)',
  },
  platinum: {
    bg: '#0f2417',
    text: '#ffffff',
    border: '#1a7a4a',
    glow: 'rgba(26, 122, 74, 0.4)',
  },
} as const;

export const SECTOR_COLORS = {
  rmg: {
    primary: '#1a7a4a',
    bg: '#e8f5ee',
    text: '#0f2417',
    border: '#1a7a4a',
  },
  leather: {
    primary: '#92400e',
    bg: '#fef3c7',
    text: '#78350f',
    border: '#d97706',
  },
  jute: {
    primary: '#ca8a04',
    bg: '#fefce8',
    text: '#854d0e',
    border: '#ca8a04',
  },
  pharma: {
    primary: '#2563eb',
    bg: '#eff6ff',
    text: '#1e40af',
    border: '#3b82f6',
  },
  ceramics: {
    primary: '#dc2626',
    bg: '#fef2f2',
    text: '#991b1b',
    border: '#ef4444',
  },
  agro: {
    primary: '#16a34a',
    bg: '#f0fdf4',
    text: '#166534',
    border: '#22c55e',
  },
} as const;

export const SECTORS = {
  rmg: { name: 'RMG & Knitwear', nameBn: 'আরএমজি ও নিটওয়্যার' },
  leather: { name: 'Leather & Footwear', nameBn: 'চামড়া ও জুতা' },
  jute: { name: 'Jute & Natural Fibre', nameBn: 'পাট ও প্রাকৃতিক তন্তু' },
  pharma: { name: 'Pharmaceuticals', nameBn: 'ফার্মাসিউটিক্যালস' },
  ceramics: { name: 'Ceramics & Handicraft', nameBn: 'সিরামিক ও হস্তশিল্প' },
  agro: { name: 'Frozen Fish & Agri', nameBn: 'সামুদ্রিক ও কৃষি' },
} as const;

export const ANIMATION_PRESETS = {
  springCard: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
  staggerContainer: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
  },
  staggerChild: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },
} as const;

export const PLATFORM_TAGLINE = 'Bangladesh makes it. SourceBD connects it.';
export const PLATFORM_NAME = 'SourceBD';
export const PLATFORM_EMAIL = 'hello@sourcebd.com';
export const PLATFORM_PHONE = '+880 1700-000000';