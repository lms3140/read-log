import type { OptionHTMLAttributes } from "react";

import { cn } from "../../libs/cn";

export interface OptionProps
  extends Omit<OptionHTMLAttributes<HTMLOptionElement>, "className"> {
  className?: string;
}

export function Option({ className, ...props }: OptionProps) {
  return (
    <option
      className={cn("bg-surface text-foreground", className)}
      {...props}
    />
  );
}
