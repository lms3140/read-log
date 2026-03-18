// src/entities/book/api/bookRepository.ts

import { db } from "../../../shared/libs/db/db";
import type { Book } from "../model/book";

export async function getBooks() {
  return db.books.orderBy("createdAt").reverse().toArray();
}

export async function getBookById(id: string) {
  return db.books.get(id);
}

export async function addBook(book: Book) {
  await db.books.add(book);
}

export async function updateBook(book: Book) {
  await db.books.put(book);
}

export async function removeBook(id: string) {
  await db.books.delete(id);
}
