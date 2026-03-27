import type { ButtonHTMLAttributes } from "react";

import { cn } from "../../libs/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-primary bg-primary text-surface-elevated shadow-xs hover:bg-primary/95 hover:border-primary/95",
  secondary:
    "border border-line bg-surface text-foreground shadow-xs hover:bg-surface-elevated hover:border-line-strong",
  outline:
    "border border-line bg-transparent text-foreground hover:bg-surface hover:border-line-strong",
  ghost:
    "border border-transparent bg-transparent text-foreground-muted hover:bg-surface hover:text-foreground",
  danger:
    "border border-danger bg-danger text-surface-elevated shadow-xs hover:bg-danger/95 hover:border-danger/95",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export function Button({
  className,
  type = "button",
  variant = "primary",
  size = "md",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 rounded-sm font-sans font-medium whitespace-nowrap transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:border-line disabled:bg-surface-muted disabled:text-foreground-soft disabled:shadow-none",
        "cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
