import { create } from "zustand";

export type BookEditStore = {
  bookId: string | null;
  setBookId: (id: string) => void;
  clearBookId: () => void;
};

export const useBookEditStore = create<BookEditStore>((set) => ({
  bookId: null,
  setBookId: (id) => {
    set({ bookId: id });
  },
  clearBookId: () => {
    set({ bookId: null });
  },
}));
