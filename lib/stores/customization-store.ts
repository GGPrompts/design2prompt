import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Component } from '@/types/component';
import { Customization, defaultCustomization } from '@/types/customization';

type CustomizationStore = {
  selectedComponent: Component | null;
  customization: Customization;
  setComponent: (component: Component | null) => void;
  updateCustomization: (updates: Partial<Customization>) => void;
  resetCustomization: () => void;
};

export const useCustomizationStore = create<CustomizationStore>()(
  devtools(
    (set) => ({
      selectedComponent: null,
      customization: defaultCustomization,

      setComponent: (component) =>
        set({
          selectedComponent: component,
          customization: component?.defaultCustomization || defaultCustomization
        }),

      updateCustomization: (updates) =>
        set((state) => ({
          customization: { ...state.customization, ...updates },
        })),

      resetCustomization: () =>
        set({ customization: defaultCustomization }),
    }),
    { name: 'CustomizationStore' }
  )
);
