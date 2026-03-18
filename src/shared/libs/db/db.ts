import Dexie, { type EntityTable } from "dexie";
import type { Book } from "../../../features/book/model/book";

class ReadLogDB extends Dexie {
  books!: EntityTable<Book, "id">;

  constructor() {
    super("read-log-db");

    this.version(1).stores({
      books: "id, status, genre, createdAt, finishedAt",
    });
  }
}

export const db = new ReadLogDB();
