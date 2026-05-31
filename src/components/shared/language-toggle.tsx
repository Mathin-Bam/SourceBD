'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/stores/language-store';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        'relative flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
        'bg-muted hover:bg-muted/80 text-foreground',
        className
      )}
      aria-label={t('language.toggle')}
    >
      <motion.div
        layout
        className="flex items-center gap-1"
      >
        <span
          className={cn(
            'transition-opacity',
            language === 'en' ? 'opacity-100' : 'opacity-50'
          )}
        >
          EN
        </span>
        <span className="text-muted-foreground">/</span>
        <span
          className={cn(
            'transition-opacity',
            language === 'bn' ? 'opacity-100' : 'opacity-50'
          )}
        >
          বাং
        </span>
      </motion.div>
    </button>
  );
}