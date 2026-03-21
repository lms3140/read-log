import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { Button, Input, Section } from "../../../shared/components/ui";
import type { BookForm } from "../model/book";
import {
  BOOK_TAG_CATEGORY_LABELS,
  BOOK_TAGS,
  type BookTag,
  type BookTagCategory,
} from "../model/tagType";

export function FormSection() {
  const { register, control, handleSubmit } = useForm<BookForm>();

  type TagOption = {
    value: BookTag;
    label: string;
  };

  type TagGroup = {
    label: string;
    options: TagOption[];
  };

  const groupedTagOptions: TagGroup[] = (
    Object.keys(BOOK_TAGS) as BookTagCategory[]
  ).map((category) => ({
    label: BOOK_TAG_CATEGORY_LABELS[category],
    options: BOOK_TAGS[category].map((tag) => ({
      value: tag,
      label: tag,
    })),
  }));

  const flatTagOptions = groupedTagOptions.flatMap((group) => group.options);

  return (
    <Section>
      <form
        onSubmit={handleSubmit((data: BookForm) => {
          console.log(data);
        })}
      >
        <Input register={register} name="title" />
        <Controller
          name="tags"
          control={control}
          render={({ field }) => {
            return (
              <Select<TagOption, true, TagGroup>
                value={flatTagOptions.filter((option) =>
                  field.value?.includes(option.value),
                )}
                onChange={(selected) => {
                  field.onChange(selected.map((option) => option.value));
                }}
                isMulti
                options={groupedTagOptions}
              />
            );
          }}
        ></Controller>
        <Button type="submit">하이</Button>
      </form>
    </Section>
  );
}
