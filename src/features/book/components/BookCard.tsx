import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../shared/components/ui";
import { removeBook } from "../api/bookRepo";
import { useBookEditStore } from "../api/store/bookEditStore";
import type { Book } from "../model/book";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const setBookId = useBookEditStore((state) => state.setBookId);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{book.title}</CardTitle>
          <div>
            <Button variant="secondary" onClick={() => setBookId(book.id)}>
              수정
            </Button>
            <Button
              variant="danger"
              onClick={async () => {
                await removeBook(book.id);
              }}
            >
              삭제
            </Button>
          </div>
        </div>
        <CardDescription>
          {book.author} · {book.genre}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-sm text-foreground-muted">
        <p>상태: {book.status}</p>
        {typeof book.rating === "string" ? <p>평점: {book.rating}점</p> : null}
        {book.tags.length > 0 ? <p>태그: {book.tags.join(", ")}</p> : null}
        {book.memo ? <p>메모: {book.memo}</p> : null}
        <p>기록일: {new Date(book.createdAt).toLocaleDateString("ko-KR")}</p>
      </CardContent>
    </Card>
  );
}
