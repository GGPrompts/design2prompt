import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { Collection, SavedComponent } from '@/types/collection';

type CollectionStore = {
  collections: Collection[];
  addCollection: (collection: Collection) => void;
  updateCollection: (id: string, updates: Partial<Collection>) => void;
  removeCollection: (id: string) => void;
  addComponentToCollection: (collectionId: string, component: SavedComponent) => void;
  removeComponentFromCollection: (collectionId: string, componentId: string) => void;
  updateComponentInCollection: (
    collectionId: string,
    componentId: string,
    updates: Partial<SavedComponent>
  ) => void;
  getCollection: (id: string) => Collection | undefined;
};

export const useCollectionStore = create<CollectionStore>()(
  devtools(
    persist(
      (set, get) => ({
        collections: [],

        addCollection: (collection) =>
          set((state) => ({
            collections: [...state.collections, collection],
          })),

        updateCollection: (id, updates) =>
          set((state) => ({
            collections: state.collections.map((c) =>
              c.id === id ? { ...c, ...updates, updatedAt: new Date() } : c
            ),
          })),

        removeCollection: (id) =>
          set((state) => ({
            collections: state.collections.filter((c) => c.id !== id),
          })),

        addComponentToCollection: (collectionId, component) =>
          set((state) => ({
            collections: state.collections.map((c) =>
              c.id === collectionId
                ? {
                    ...c,
                    components: [...c.components, component],
                    updatedAt: new Date(),
                  }
                : c
            ),
          })),

        removeComponentFromCollection: (collectionId, componentId) =>
          set((state) => ({
            collections: state.collections.map((c) =>
              c.id === collectionId
                ? {
                    ...c,
                    components: c.components.filter((comp) => comp.id !== componentId),
                    updatedAt: new Date(),
                  }
                : c
            ),
          })),

        updateComponentInCollection: (collectionId, componentId, updates) =>
          set((state) => ({
            collections: state.collections.map((c) =>
              c.id === collectionId
                ? {
                    ...c,
                    components: c.components.map((comp) =>
                      comp.id === componentId ? { ...comp, ...updates } : comp
                    ),
                    updatedAt: new Date(),
                  }
                : c
            ),
          })),

        getCollection: (id) => get().collections.find((c) => c.id === id),
      }),
      {
        name: 'design2prompt-collections',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ collections: state.collections }),
      }
    ),
    { name: 'CollectionStore' }
  )
);
