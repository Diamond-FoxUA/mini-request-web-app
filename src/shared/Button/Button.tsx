import type { ComponentProps } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
} & ComponentProps<"button">;

export default function Button({
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-2xl px-4 py-2 cursor-pointer duration-300 ease-in-out ${variant === "primary" ? "text-white bg-blue-500 flex items-center hover:bg-blue-600 disabled:bg-slate-400  transition-colors disabled:cursor-not-allowed active:bg-blue-400" : "font-medium text-slate-700 border border-slate-700 hover:scale-110 transition-transform"} `}
    ></button>
  );
}
