import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishitems: [],   // ✅ Correct state name

      // ✅ Add to Wishlist (Prevent duplicates)
      addToWish: (item) => {
        const exists = get().wishitems.find(
          (i) => i._id === item._id
        );

        if (!exists) {
          set((state) => ({
            wishitems: [...state.wishitems, item],
          }));
        }
      },

      // ✅ Remove from Wishlist
      removeFromWish: (id) =>
        set((state) => ({
          wishitems: state.wishitems.filter(
            (item) => item._id !== id
          ),
        })),

      // ✅ Clear Wishlist
      clearWishlist: () =>
        set({
          wishitems: [],
        }),
    }),
    {
      name: "wishStorage",
    }
  )
);