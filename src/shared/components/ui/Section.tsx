import type { HTMLAttributes } from "react";

import { cn } from "../../libs/cn";

export function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "rounded-md border border-line bg-surface px-5 py-6 text-foreground shadow-xs sm:px-6 sm:py-7",
        className,
      )}
      {...props}
    />
  );
}

export function SectionHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mb-5 flex flex-col gap-2 border-b border-line pb-4", className)}
      {...props}
    />
  );
}

export function SectionTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-serif text-2xl leading-snug font-medium tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function SectionDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-3xl font-sans text-sm leading-6 text-foreground-muted",
        className,
      )}
      {...props}
    />
  );
}

export function SectionContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-4 pt-1", className)} {...props} />;
}
