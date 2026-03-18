import type { HTMLAttributes } from "react";

import { cn } from "../../libs/cn";

export function Page({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <main
      className={cn(
        "min-h-screen bg-background py-10 text-foreground sm:py-12 lg:py-14",
        className,
      )}
      {...props}
    />
  );
}
