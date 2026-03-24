import type { BookGenre, BookTag } from "./tagType";

type BookStatus = "TO_READ" | "READING" | "DONE" | "FAILED";

export type Book = {
  id: string;
  title: string;
  author: string;
  genre: BookGenre;
  tags: BookTag[];
  status: BookStatus;
  rating?: number;
  memo?: string;
  createdAt: string;
  finishedAt?: string;
};

export type BookForm = {
  title: string;
  author: string;
  genre: BookGenre;
  tags: BookTag[];
  status: BookStatus;
  rating?: number;
  memo?: string;
};
