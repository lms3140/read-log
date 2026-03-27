import { useLiveQuery } from "dexie-react-hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Section,
} from "../../../shared/components/ui";
import { db } from "../../../shared/libs/db/db";
import { BookCard } from "./BookCard";

export function CardListSection() {
  const books = useLiveQuery(
    () => db.books.orderBy("createdAt").reverse().toArray(),
    [],
    [],
  );

  if (!books) return <div>불러오는 중...</div>;
  if (books.length === 0) return <div>등록된 책이 없습니다.</div>;

  return (
    <Section>
      <ul className="flex flex-col gap-4">
        {books.map((book) => (
          <li key={book.id}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
