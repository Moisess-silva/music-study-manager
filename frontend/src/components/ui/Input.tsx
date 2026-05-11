import type {
  InputHTMLAttributes,
} from "react";

interface InputProps
extends InputHTMLAttributes<HTMLInputElement> {

  label?: string;
}

export function Input({
  label,
  ...props
}: InputProps) {

  return (

    <div
      className="
        flex
        flex-col
        gap-2
      "
    >

      {
        label && (

          <label
            className="
              text-sm
              text-zinc-300
            "
          >

            {label}

          </label>
        )
      }

      <input
        {...props}
        className="
          bg-zinc-950
          border
          border-zinc-800
          rounded-xl
          px-4
          py-3
          outline-none
          focus:border-green-500
        "
      />

    </div>
  );
}