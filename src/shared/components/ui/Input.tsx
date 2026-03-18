import {
  forwardRef,
  type InputHTMLAttributes,
} from "react";

import { cn } from "../../libs/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "flex h-10 w-full rounded-sm border border-line bg-surface px-3 py-2 font-sans text-sm text-foreground shadow-xs transition-colors duration-200",
          "placeholder:text-foreground-soft",
          "hover:border-line-strong",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-line-strong",
          "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-foreground-soft disabled:hover:border-line",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
