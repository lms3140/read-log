import { cn } from "../../libs/cn";

type Option = { label: string; value: string | number };

export function Radio({
  title,
  options,
  ...props
}: {
  title: string;
  options: readonly Option[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-sans text-sm text-foreground-muted">{title}</div>

      <div
        className="
          inline-flex w-full overflow-hidden rounded-sm
          border border-line bg-surface shadow-xs
        "
      >
        {options.map((opt, idx) => (
          <label key={opt.value} className="flex-1 cursor-pointer">
            <input
              type="radio"
              value={opt.value}
              {...props}
              className="peer sr-only"
            />
            <span
              className={cn(
                "flex min-h-10 items-center justify-center px-3 py-2 text-sm font-medium select-none",
                "border-transparent text-foreground transition-colors duration-200",
                "hover:bg-surface-muted hover:text-foreground",
                "peer-focus-visible:relative peer-focus-visible:z-10 peer-focus-visible:outline-none",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-ring/35 peer-focus-visible:ring-inset",
                "peer-disabled:cursor-not-allowed peer-disabled:bg-surface-muted peer-disabled:text-foreground-soft",
                "peer-checked:bg-primary-soft peer-checked:text-foreground",
                idx !== 0 && "border-l border-line",
              )}
            >
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
