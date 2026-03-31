import Dexie, { type EntityTable } from "dexie";
import type { Book, WishList } from "../../../features/book/model/book";

class ReadLogDB extends Dexie {
  books!: EntityTable<Book, "id">;
  wishList!: EntityTable<WishList, "id">;

  constructor() {
    super("read-log-db");

    this.version(1).stores({
      books: "id, status, genre, createdAt, finishedAt",
    });
    this.version(2).stores({
      books: "id, status, genre, createdAt, finishedAt",
      wishList: "id, genre, createdAt",
    });
  }
}

export const db = new ReadLogDB();
