import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
extends ButtonHTMLAttributes<HTMLButtonElement> {

  children: ReactNode;

  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {

  return (

    <button
      {...props}
      className={`
        w-full
        rounded-xl
        px-4
        py-3
        font-semibold
        transition
        duration-200

        ${
          variant === "primary"
            ? `
              bg-green-600
              hover:bg-green-700
              text-white
            `
            : `
              bg-zinc-800
              hover:bg-zinc-700
              text-white
            `
        }
      `}
    >

      {children}

    </button>
  );
}