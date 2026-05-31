'use client';

import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { VerificationTier } from '@/lib/types';
import {
  CheckCircle,
  Star,
  Crown,
  Shield,
} from 'lucide-react';

interface BadgeTierProps {
  tier: VerificationTier;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  animated?: boolean;
  showLabel?: boolean;
  className?: string;
  criteria?: string[];
}

const tierStyles = {
  Basic: {
    bg: 'bg-gray-100',
    text: 'text-gray-600',
    border: 'border-gray-200',
    glow: 'shadow-gray-200/50',
  },
  Verified: {
    bg: 'bg-mint-mist',
    text: 'text-padma-green',
    border: 'border-padma-green/20',
    glow: 'shadow-padma-green/20',
  },
  Gold: {
    bg: 'bg-loom-gold',
    text: 'text-bengal-forest',
    border: 'border-loom-gold/30',
    glow: 'shadow-loom-gold/40',
  },
  Platinum: {
    bg: 'bg-bengal-forest',
    text: 'text-white',
    border: 'border-padma-green/30',
    glow: 'shadow-bengal-forest/40',
  },
};

const tierIcons = {
  Basic: Shield,
  Verified: CheckCircle,
  Gold: Star,
  Platinum: Crown,
};

const tierSizes = {
  sm: 'text-xs px-2 py-0.5 gap-1',
  md: 'text-sm px-2.5 py-1 gap-1.5',
  lg: 'text-base px-3 py-1.5 gap-2',
};

const tierLabels = {
  Basic: 'Basic',
  Verified: 'Verified',
  Gold: 'Gold',
  Platinum: 'Platinum',
};

const tierCriteria = {
  Basic: ['Business registration verified'],
  Verified: [
    'Business registration verified',
    'Factory address confirmed',
  ],
  Gold: [
    'Business registration verified',
    'Factory address confirmed',
    'Trade references checked',
    'Sample review completed',
  ],
  Platinum: [
    'Business registration verified',
    'Factory address confirmed',
    'Trade references checked',
    'Sample review completed',
    'On-site audit passed',
    'Financial verification completed',
  ],
};

export function BadgeTier({
  tier,
  size = 'md',
  showIcon = true,
  animated = false,
  showLabel = true,
  className,
  criteria,
}: BadgeTierProps) {
  const styles = tierStyles[tier];
  const Icon = tierIcons[tier];
  const badgeCriteria = criteria || tierCriteria[tier];

  const tooltipContent = (
    <div className="bg-bengal-forest text-white px-3 py-2 rounded-lg shadow-lg max-w-xs">
      <p className="font-semibold mb-1">{tier} Verified</p>
      <ul className="text-xs space-y-0.5 opacity-90">
        {badgeCriteria.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3 text-padma-green" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

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
      {showLabel && <span className="font-medium">{tierLabels[tier]}</span>}
    </>
  );

  const badgeClassName = cn(
    'inline-flex items-center rounded-full border font-sans',
    styles.bg,
    styles.text,
    styles.border,
    tierSizes[size],
    animated && (tier === 'Gold' || tier === 'Platinum') && styles.glow,
    animated && tier === 'Platinum' && 'animate-pulse-glow',
    animated && tier === 'Gold' && 'shadow-lg',
    className
  );

  const BadgeWrapper = ({ children }: { children: React.ReactNode }) => {
    if (animated && tier === 'Platinum') {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={badgeClassName}
        >
          {children}
        </motion.div>
      );
    }
    return <div className={badgeClassName}>{children}</div>;
  };

  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <BadgeWrapper>
            {BadgeContent}
          </BadgeWrapper>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="top" sideOffset={5}>
            {tooltipContent}
            <Tooltip.Arrow className="fill-bengal-forest" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

// Separate VerifiedMark component with the exact specification
interface VerifiedMarkProps {
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  criteria?: string[];
  className?: string;
}

const verifiedTierStyles = {
  bronze: {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    border: 'border-amber-400',
    glow: 'shadow-amber-400/30',
    icon: Shield,
  },
  silver: {
    bg: 'bg-slate-50',
    text: 'text-slate-600',
    border: 'border-slate-400',
    glow: 'shadow-slate-400/30',
    icon: Shield,
  },
  gold: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-loom-gold',
    glow: 'shadow-loom-gold/40',
    icon: Star,
  },
  platinum: {
    bg: 'bg-bengal-forest',
    text: 'text-white',
    border: 'border-padma-green',
    glow: 'shadow-padma-green/40',
    icon: Crown,
  },
};

const verifiedTierLabels = {
  bronze: 'Bronze',
  silver: 'Silver',
  gold: 'Gold',
  platinum: 'Platinum',
};

export function VerifiedMark({
  tier,
  size = 'md',
  showLabel = true,
  criteria,
  className,
}: VerifiedMarkProps) {
  const styles = verifiedTierStyles[tier];
  const Icon = styles.icon;
  const isHighTier = tier === 'gold' || tier === 'platinum';

  const defaultCriteria = {
    bronze: ['Identity verified'],
    silver: ['Identity verified', 'Contact confirmed'],
    gold: ['Identity verified', 'Contact confirmed', 'Business verified'],
    platinum: ['Identity verified', 'Contact confirmed', 'Business verified', 'Site audited'],
  };

  const contentCriteria = criteria || defaultCriteria[tier];

  const tooltipContent = (
    <div className="bg-bengal-forest text-white px-3 py-2 rounded-lg shadow-lg max-w-xs">
      <p className="font-semibold mb-1">{verifiedTierLabels[tier]} Verified</p>
      <ul className="text-xs space-y-0.5 opacity-90">
        {contentCriteria.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3 text-padma-green" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const badgeClassName = cn(
    'inline-flex items-center rounded-full border font-sans',
    styles.bg,
    styles.text,
    styles.border,
    tierSizes[size],
    styles.glow,
    isHighTier && 'shadow-lg',
    className
  );

  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={badgeClassName}
            animate={isHighTier ? {
              boxShadow: [
                `0 0 0 0 ${verifiedTierStyles[tier].glow}`,
                `0 0 20px 5px ${verifiedTierStyles[tier].glow}`,
                `0 0 0 0 ${verifiedTierStyles[tier].glow}`,
              ],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon
              className={cn(
                size === 'sm' && 'h-3 w-3',
                size === 'md' && 'h-3.5 w-3.5',
                size === 'lg' && 'h-4 w-4'
              )}
            />
            {showLabel && <span className="font-medium">{verifiedTierLabels[tier]}</span>}
          </motion.div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="top" sideOffset={5}>
            {tooltipContent}
            <Tooltip.Arrow className="fill-bengal-forest" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}