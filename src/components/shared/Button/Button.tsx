import type { ComponentProps } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
} & ComponentProps<"button">;

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-2xl mx-auto flex items-center justify-center w-fit px-4 py-2 cursor-pointer duration-300 ease-in-out transition-colors disabled:cursor-not-allowed ${variant === "primary" ? "text-white bg-blue-500 hover:bg-blue-600 disabled:bg-slate-400 active:bg-blue-400" : "font-medium text-slate-700 border-2 border-slate-700 hover:border-blue-600 hover:text-blue-600 active:text-blue-500 active:border-blue-500 disabled:border-slate-400 disabled:text-slate-400"} `}
    ></button>
  );
}
