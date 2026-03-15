// import {create} from 'zustand'
// import {persist} from 'zustand/middleware'
// export const useCartStore = create(
//   persist(
//     (set, get) => ({
//       items: [],

//       addToCart: (item) =>
//         set((state) => ({
//           items: [...state.items, item] ,
//         })),

//       removeToCart: (id) =>
//         set((state) => ({
//             items: state.items.filter(
//   (item) => item && item._id !== id
// )
//         })),

    


//       clearCart: () => set(() => ({ items: [] })),

     
//     }),
//     {
//       name: "cartStorage",
//     }
//   )
// );

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],

      addToCart: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),

      // ✅ remove by _id
      removeToCart: (id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item && item._id !== id
          ),
        })),

      clearCart: () =>
        set({
          items: [],
        }),
    }),
    {
      name: "cartStorage",
    }
  )
);
