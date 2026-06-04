'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { VerificationTier } from '@/lib/types';
import {
  CheckCircle,
  Star,
  Crown,
} from 'lucide-react';

interface BadgeTierProps {
  tier: VerificationTier;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  animated?: boolean;
  className?: string;
}

const tierStyles = {
  Basic: {
    bg: 'bg-gray-100',
    text: 'text-gray-600',
    border: 'border-gray-200',
  },
  Verified: {
    bg: 'bg-mint-mist',
    text: 'text-padma-green',
    border: 'border-padma-green/20',
  },
  Gold: {
    bg: 'bg-jute-gold',
    text: 'text-bengal-forest',
    border: 'border-jute-gold/30',
  },
  Platinum: {
    bg: 'bg-bengal-forest',
    text: 'text-white',
    border: 'border-bengal-forest/30',
  },
};

const tierIcons = {
  Basic: null,
  Verified: CheckCircle,
  Gold: Star,
  Platinum: Crown,
};

const tierSizes = {
  sm: 'text-xs px-2 py-0.5 gap-1',
  md: 'text-sm px-2.5 py-1 gap-1.5',
  lg: 'text-base px-3 py-1.5 gap-2',
};

export function BadgeTier({
  tier,
  size = 'md',
  showIcon = true,
  animated = false,
  className,
}: BadgeTierProps) {
  const styles = tierStyles[tier];
  const Icon = tierIcons[tier];

  const BadgeContent = (
    <>
      {Icon && showIcon && (
        <Icon
          className={cn(
            size === 'sm' && 'h-3 w-3',
            size === 'md' && 'h-3.5 w-3.5',
            size === 'lg' && 'h-4 w-4'
          )}
        />
      )}
      <span className="font-mono text-[10px] uppercase tracking-widest">{tier}</span>
    </>
  );

  const badgeClassName = cn(
    'inline-flex items-center rounded-sm border font-sans',
    styles.bg,
    styles.text,
    styles.border,
    tierSizes[size],
    animated && tier === 'Platinum' && 'animate-pulse-glow',
    animated && tier === 'Gold' && 'shadow-lg shadow-jute-gold/20',
    className
  );

  if (animated && tier === 'Platinum') {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={badgeClassName}
      >
        {BadgeContent}
      </motion.div>
    );
  }

  return <div className={badgeClassName}>{BadgeContent}</div>;
}