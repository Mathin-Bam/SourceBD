'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SECTOR_COLORS, SECTORS } from '@/lib/tokens';
import type { Sector } from '@/lib/types';
import { useLanguage } from '@/stores/language-store';

interface SectorChipProps {
  sector: Sector;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

const sectorSizes = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
  lg: 'text-base px-3 py-1.5',
};

export function SectorChip({
  sector,
  size = 'md',
  onClick,
  className,
}: SectorChipProps) {
  const { language } = useLanguage();
  const colors = SECTOR_COLORS[sector];
  const sectorInfo = SECTORS[sector];
  const label = language === 'bn' ? sectorInfo.nameBn : sectorInfo.name;

  const ChipContent = (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-all',
        sectorSizes[size],
        onClick && 'cursor-pointer hover:scale-105',
        className
      )}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
      }}
    >
      {label}
    </span>
  );

  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {ChipContent}
      </motion.button>
    );
  }

  return ChipContent;
}