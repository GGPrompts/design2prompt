import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { CanvasComponent, CanvasPosition } from '@/types/canvas';

type Viewport = 'mobile' | 'tablet' | 'desktop';

type CanvasStore = {
  components: CanvasComponent[];
  grid: {
    size: number;
    show: boolean;
    snap: boolean;
  };
  guides: {
    show: boolean;
    positions: number[];
  };
  viewport: Viewport;

  addComponent: (component: CanvasComponent) => void;
  removeComponent: (id: string) => void;
  updateComponentPosition: (id: string, position: CanvasPosition) => void;
  updateComponent: (id: string, updates: Partial<CanvasComponent>) => void;
  toggleComponentLock: (id: string) => void;
  toggleComponentVisibility: (id: string) => void;
  setGrid: (grid: Partial<CanvasStore['grid']>) => void;
  setGuides: (guides: Partial<CanvasStore['guides']>) => void;
  setViewport: (viewport: Viewport) => void;
  clearCanvas: () => void;
};

export const useCanvasStore = create<CanvasStore>()(
  devtools(
    persist(
      (set) => ({
        components: [],
        grid: { size: 20, show: true, snap: true },
        guides: { show: true, positions: [] },
        viewport: 'desktop',

        addComponent: (component) =>
          set((state) => ({
            components: [...state.components, component],
          })),

        removeComponent: (id) =>
          set((state) => ({
            components: state.components.filter((c) => c.id !== id),
          })),

        updateComponentPosition: (id, position) =>
          set((state) => ({
            components: state.components.map((c) =>
              c.id === id ? { ...c, position } : c
            ),
          })),

        updateComponent: (id, updates) =>
          set((state) => ({
            components: state.components.map((c) =>
              c.id === id ? { ...c, ...updates } : c
            ),
          })),

        toggleComponentLock: (id) =>
          set((state) => ({
            components: state.components.map((c) =>
              c.id === id ? { ...c, locked: !c.locked } : c
            ),
          })),

        toggleComponentVisibility: (id) =>
          set((state) => ({
            components: state.components.map((c) =>
              c.id === id ? { ...c, hidden: !c.hidden } : c
            ),
          })),

        setGrid: (gridUpdates) =>
          set((state) => ({
            grid: { ...state.grid, ...gridUpdates },
          })),

        setGuides: (guidesUpdates) =>
          set((state) => ({
            guides: { ...state.guides, ...guidesUpdates },
          })),

        setViewport: (viewport) => set({ viewport }),

        clearCanvas: () => set({ components: [] }),
      }),
      {
        name: 'design2prompt-canvas',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          components: state.components,
          grid: state.grid,
          guides: state.guides,
          viewport: state.viewport,
        }),
      }
    ),
    { name: 'CanvasStore' }
  )
);
