// Language Store - Zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { en } from '@/lib/i18n/en';
import { bn } from '@/lib/i18n/bn';
import type { Language } from '@/lib/types';

type Translations = typeof en;

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string) => string;
}

const translations = { en, bn };

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split('.');
  let result: unknown = obj;
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof result === 'string' ? result : path;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () => set((state) => ({
        language: state.language === 'en' ? 'bn' : 'en'
      })),
      t: (path) => {
        const dict = translations[get().language];
        return getNestedValue(dict, path);
      },
    }),
    {
      name: 'sourcebd-language',
      partialize: (state) => ({ language: state.language }),
    }
  )
);