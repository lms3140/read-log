import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button, Input, Section } from "../../../shared/components/ui";
import {
  addWishList,
  getWishListById,
  updateWishList,
} from "../api/bookWishRepo";
import { useBookWishEditStore } from "../api/store/bookWishEditStore";
import type { WishList, WishListBookForm } from "../model/book";
import { BOOK_GENRES } from "../model/tagType";

const defaultValues: WishListBookForm = {
  title: "",
  author: "",
  genre: BOOK_GENRES[0],
  memo: "",
};

export function WishListForm() {
  const wishListId = useBookWishEditStore((state) => state.wishListId);
  const clearWishListId = useBookWishEditStore(
    (state) => state.clearWishListId,
  );

  const { register, handleSubmit, reset } = useForm<WishListBookForm>({
    defaultValues,
  });

  const convertWishListToForm = (wishList: WishList): WishListBookForm => {
    return {
      title: wishList.title,
      author: wishList.author,
      genre: wishList.genre,
      memo: wishList.memo?.trim() ? wishList.memo : "",
    };
  };

  const loadWishListForm = async (targetId: string) => {
    const wishList = await getWishListById(targetId);
    if (!wishList) return;

    reset(convertWishListToForm(wishList));
  };

  useEffect(() => {
    if (!wishListId) return;

    loadWishListForm(wishListId);
  }, [wishListId, reset]);

  const submitWishList = async (data: WishListBookForm) => {
    if (wishListId) {
      const currentWishList = await getWishListById(wishListId);
      if (!currentWishList) return;

      const targetWishList: WishList = {
        id: wishListId,
        title: data.title.trim(),
        author: data.author.trim(),
        genre: data.genre,
        memo: data.memo?.trim() ? data.memo.trim() : undefined,
        createdAt: currentWishList.createdAt,
      };

      await updateWishList(targetWishList);
      clearWishListId();
    } else {
      const targetWishList: WishList = {
        id: crypto.randomUUID(),
        title: data.title.trim(),
        author: data.author.trim(),
        genre: data.genre,
        memo: data.memo?.trim() ? data.memo.trim() : undefined,
        createdAt: new Date().toISOString(),
      };

      await addWishList(targetWishList);
    }

    reset(defaultValues);
  };

  return (
    <Section>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(submitWishList)}
      >
        <Input
          {...register("title", { required: true })}
          placeholder="읽고 싶은 책 제목"
        />
        <Input
          {...register("author", { required: true })}
          placeholder="작가 이름"
        />

        <select
          {...register("genre")}
          className="flex h-10 w-full rounded-sm border border-line bg-surface px-3 py-2 font-sans text-sm text-foreground shadow-xs transition-colors duration-200 hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-line-strong"
        >
          {BOOK_GENRES.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <textarea
          {...register("memo")}
          rows={4}
          placeholder="읽고 싶은 이유나 메모를 남겨보세요"
          className="w-full rounded-sm border border-line bg-surface px-3 py-2 font-sans text-sm text-foreground shadow-xs transition-colors duration-200 placeholder:text-foreground-soft hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-line-strong"
        />

        <Button type="submit">
          {wishListId ? "위시리스트 수정" : "위시리스트에 추가"}
        </Button>
      </form>
    </Section>
  );
}
