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
            <Card>
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>
                  {book.author} · {book.genre}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 text-sm text-foreground-muted">
                <p>상태: {book.status}</p>
                {typeof book.rating === "number" ? (
                  <p>평점: {book.rating}점</p>
                ) : null}
                {book.tags.length > 0 ? (
                  <p>태그: {book.tags.join(", ")}</p>
                ) : null}
                {book.memo ? <p>메모: {book.memo}</p> : null}
                <p>
                  기록일: {new Date(book.createdAt).toLocaleDateString("ko-KR")}
                </p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
