import { create } from "zustand";

export type BookWishEditStore = {
  wishListId: string | null;
  setWishListId: (id: string) => void;
  clearWishListId: () => void;
};

export const useBookWishEditStore = create<BookWishEditStore>((set) => ({
  wishListId: null,
  setWishListId: (id) => {
    set({ wishListId: id });
  },
  clearWishListId: () => {
    set({ wishListId: null });
  },
}));
