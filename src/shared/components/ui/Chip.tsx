import {
  BOOK_TAG_SECTIONS,
  type BookTag,
} from "../../../features/book/model/tagType";
import { cn } from "../../libs/cn";

type ChipProps = {
  value: BookTag[];
  onChange: (next: BookTag[]) => void;
  disabled?: boolean;
};

export function toggleTag(tags: BookTag[], target: BookTag): BookTag[] {
  return tags.includes(target)
    ? tags.filter((tag) => tag !== target)
    : [...tags, target];
}

export function Chip({ value, onChange, disabled }: ChipProps) {
  const handleClick = (tag: BookTag) => {
    if (disabled) return;
    onChange(toggleTag(value, tag));
  };

  return (
    <div className="flex flex-col gap-4">
      <h2>태그</h2>
      {BOOK_TAG_SECTIONS.map((section) => (
        <div
          key={section.category}
          className="flex flex-col gap-2 rounded-sm border border-line bg-surface px-3 py-3 shadow-xs"
        >
          <div className="font-sans text-sm font-medium text-foreground-muted">
            {section.label}
          </div>

          <div className="flex flex-wrap gap-2">
            {section.tags.map((tag) => {
              const selected = value.includes(tag);

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleClick(tag)}
                  aria-pressed={selected}
                  disabled={disabled}
                  className={cn(
                    "inline-flex min-h-9 items-center justify-center rounded-sm border px-3 py-1.5 font-sans text-sm font-medium transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "disabled:cursor-not-allowed disabled:border-line disabled:bg-surface-muted disabled:text-foreground-soft",
                    selected
                      ? "border-primary bg-primary-soft text-foreground"
                      : "border-line bg-surface-elevated text-foreground-muted hover:border-line-strong hover:bg-surface-muted hover:text-foreground",
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
