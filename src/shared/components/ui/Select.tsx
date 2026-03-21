// import type { SelectHTMLAttributes } from "react";
// import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

// import { cn } from "../../libs/cn";

// export interface SelectProps<T extends FieldValues> extends Omit<
//   SelectHTMLAttributes<HTMLSelectElement>,
//   "className" | "name"
// > {
//   children: React.ReactNode;
//   className?: string;
//   name: Path<T>;
//   register?: UseFormRegister<T>;
// }

// export function Select<T extends FieldValues>({
//   children,
//   className,
//   name,
//   register,
//   ...props
// }: SelectProps<T>) {
//   return (
//     <div className="relative w-full">
//       <select
//         {...register}
//         {...props}
//         name={name}
//         className={cn(
//           "flex h-10 w-full appearance-none rounded-sm border border-line bg-surface px-3 py-2 pr-10 font-sans text-sm text-foreground shadow-xs transition-colors duration-200",
//           "hover:border-line-strong",
//           "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-line-strong",
//           "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-foreground-soft disabled:hover:border-line",
//           className,
//         )}
//       >
//         {children}
//       </select>

//       <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-foreground-soft">
//         <svg
//           aria-hidden="true"
//           viewBox="0 0 20 20"
//           fill="none"
//           className="h-4 w-4"
//         >
//           <path
//             d="M5 7.5L10 12.5L15 7.5"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </span>
//     </div>
//   );
// }
