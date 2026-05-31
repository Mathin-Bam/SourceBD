// Demo Mode Store - Zustand
import { create } from 'zustand';

interface DemoState {
  isDemo: boolean;
  setDemo: (value: boolean) => void;
}

export const useDemo = create<DemoState>()((set) => ({
  isDemo: true, // Always true for pitch demo
  setDemo: (value) => set({ isDemo: value }),
}));