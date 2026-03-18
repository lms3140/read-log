import type { HTMLAttributes } from "react";

import { cn } from "../../libs/cn";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

export function Container({
  className,
  centered = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-5xl bg-background px-4 text-foreground sm:px-6 lg:px-8",
        centered && "mx-auto",
        className,
      )}
      {...props}
    />
  );
}
