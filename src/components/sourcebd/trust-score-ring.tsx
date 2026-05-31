'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TrustScoreRingProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: { size: 48, strokeWidth: 4, fontSize: 'text-xs' },
  md: { size: 80, strokeWidth: 6, fontSize: 'text-lg' },
  lg: { size: 120, strokeWidth: 8, fontSize: 'text-2xl' },
};

const tierColors = {
  bronze: '#d97706',
  silver: '#94a3b8',
  gold: '#f5c842',
  platinum: '#1a7a4a',
};

function getTierFromScore(score: number): keyof typeof tierColors {
  if (score >= 90) return 'platinum';
  if (score >= 70) return 'gold';
  if (score >= 50) return 'silver';
  return 'bronze';
}

function getGradientId(tier: keyof typeof tierColors): string {
  const colors = [
    { stop: 0, color: tierColors.bronze },
    { stop: 33, color: tierColors.silver },
    { stop: 66, color: tierColors.gold },
    { stop: 100, color: tierColors.platinum },
  ];

  const tierIndex = Object.keys(tierColors).indexOf(tier);
  const baseColor = colors[tierIndex].color;

  return `score-gradient-${tier}`;
}

export function TrustScoreRing({
  score,
  size = 'md',
  showLabel = true,
  className,
}: TrustScoreRingProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const config = sizeConfig[size];
  const radius = (config.size - config.strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const tier = getTierFromScore(score);
  const tierColor = tierColors[tier];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg
        width={config.size}
        height={config.size}
        className="-rotate-90"
      >
        <defs>
          <linearGradient id={`trust-gradient-${tier}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={tierColors.bronze} />
            <stop offset="33%" stopColor={tierColors.silver} />
            <stop offset="66%" stopColor={tierColors.gold} />
            <stop offset="100%" stopColor={tierColors.platinum} />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx={config.size / 2}
          cy={config.size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={config.strokeWidth}
          className="text-gray-100"
        />

        {/* Progress circle */}
        <motion.circle
          cx={config.size / 2}
          cy={config.size / 2}
          r={radius}
          fill="none"
          stroke={tierColor}
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Glow effect for high scores */}
        {animatedScore >= 90 && (
          <motion.circle
            cx={config.size / 2}
            cy={config.size / 2}
            r={radius}
            fill="none"
            stroke={tierColor}
            strokeWidth={config.strokeWidth + 4}
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{
              strokeDashoffset,
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              strokeDashoffset: { duration: 1.5, ease: 'easeOut' },
              opacity: { duration: 2, repeat: Infinity },
            }}
            style={{ filter: 'blur(4px)' }}
          />
        )}
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className={cn('font-bold text-foreground', config.fontSize)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(animatedScore)}
        </motion.span>
        {showLabel && size !== 'sm' && (
          <span className="text-[10px] text-muted-foreground">Trust Score</span>
        )}
      </div>
    </div>
  );
}