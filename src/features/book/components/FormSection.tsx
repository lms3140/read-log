import { Controller, useForm } from "react-hook-form";

import { addBook } from "../api/bookRepo";
import { Button, Input, Section } from "../../../shared/components/ui";
import { Radio } from "../../../shared/components/ui/Radio";
import type { Book, BookForm } from "../model/book";
import { BOOK_GENRES } from "../model/tagType";
import { Chip } from "../../../shared/components/ui/Chip";

export const BOOK_STATUS_OPTIONS = [
  { label: "읽지 않음", value: "NOT_READ" },
  { label: "읽는 중", value: "READING" },
  { label: "완독", value: "DONE" },
  { label: "재독 중", value: "RE_READING" },
  { label: "재독 완료", value: "RE_READ" },
  { label: "중도 포기", value: "FAILED" },
] as const;

export const BOOK_RATIONG_OPTIONS = [
  { label: "1점", value: 1 },
  { label: "2점", value: 2 },
  { label: "3점", value: 3 },
  { label: "4점", value: 4 },
  { label: "5점", value: 5 },
];

export function FormSection() {
  const { register, handleSubmit, control, reset } = useForm<BookForm>({
    defaultValues: {
      title: "",
      author: "",
      genre: BOOK_GENRES[0],
      tags: [],
      status: "TO_READ",
      rating: undefined,
      memo: "",
    },
  });

  const submitBook = async (data: BookForm) => {
    if (!data) return;

    const targetBook: Book = {
      id: crypto.randomUUID(),
      title: data.title,
      author: data.author,
      genre: data.genre,
      tags: data.tags,
      status: data.status,
      rating: data.rating,
      memo: data.memo?.trim() ? data.memo : undefined,
      createdAt: new Date().toISOString(),
    };

    await addBook(targetBook);
    reset();
  };

  return (
    <Section>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitBook)}>
        <Input {...register("title")} placeholder="책 제목" />
        <Input {...register("author")} placeholder="저자명" />

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
        <Controller
          control={control}
          name="tags"
          render={({ field }) => (
            <Chip onChange={field.onChange} value={field.value} />
          )}
        />

        <Radio
          {...register("status", { required: true })}
          title="상태"
          options={BOOK_STATUS_OPTIONS}
        />

        <Radio
          {...register("rating", { required: false })}
          title="점수"
          options={BOOK_RATIONG_OPTIONS}
        />

        <textarea
          {...register("memo")}
          rows={4}
          placeholder="메모를 남겨보세요"
          className="w-full rounded-sm border border-line bg-surface px-3 py-2 font-sans text-sm text-foreground shadow-xs transition-colors duration-200 placeholder:text-foreground-soft hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-line-strong"
        />

        <Button type="submit">기록 추가</Button>
      </form>
    </Section>
  );
}
