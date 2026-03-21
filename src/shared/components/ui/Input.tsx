import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { cn } from "../../libs/cn";
import type { InputHTMLAttributes } from "react";

export interface InputProps<T extends FieldValues> extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "name"
> {
  className?: string;
  name: Path<T>;
  type?: string;
  register?: UseFormRegister<T>;
}

export function Input<T extends FieldValues>({
  className,
  name,
  register,
  type = "text",
  ...props
}: InputProps<T>) {
  return (
    <input
      type={type}
      name={name}
      {...register}
      {...props}
      className={cn(
        "flex h-10 w-full rounded-sm border border-line bg-surface px-3 py-2 font-sans text-sm text-foreground shadow-xs transition-colors duration-200",
        "placeholder:text-foreground-soft",
        "hover:border-line-strong",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-line-strong",
        "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-foreground-soft disabled:hover:border-line",
        className,
      )}
    />
  );
}
