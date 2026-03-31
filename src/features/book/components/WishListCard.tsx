import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../shared/components/ui";
import { removeWishList } from "../api/bookWishRepo";
import { useBookWishEditStore } from "../api/store/bookWishEditStore";
import type { WishList } from "../model/book";

interface WishListCardProps {
  wishList: WishList;
}

export function WishListCard({ wishList }: WishListCardProps) {
  const setWishListId = useBookWishEditStore((state) => state.setWishListId);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{wishList.title}</CardTitle>
          <div>
            <Button
              variant="secondary"
              onClick={() => setWishListId(wishList.id)}
            >
              수정
            </Button>
            <Button
              variant="danger"
              onClick={async () => {
                await removeWishList(wishList.id);
              }}
            >
              삭제
            </Button>
          </div>
        </div>
        <CardDescription>
          {wishList.author} · {wishList.genre}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-sm text-foreground-muted">
        {wishList.memo ? <p>{wishList.memo}</p> : null}
        <p>등록일 {new Date(wishList.createdAt).toLocaleDateString("ko-KR")}</p>
      </CardContent>
    </Card>
  );
}
