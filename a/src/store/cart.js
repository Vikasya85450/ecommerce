import {create} from 'zustand'
import {persist} from 'zustand/middleware'
export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) =>
        set((state) => ({
          items: [...state.items, item] ,
        })),

      removeToCart: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i && i.id !== id),
        })),

      clearCart: () => set(() => ({ items: [] })),

     
    }),
    {
      name: "cartStorage",
    }
  )
);
