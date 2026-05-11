import type {
  ReactNode,
} from "react";

interface ModalProps {

  open: boolean;

  title: string;

  children: ReactNode;

  onClose: () => void;
}

export function Modal({
  open,
  title,
  children,
  onClose,
}: ModalProps) {

  if (!open) {

    return null;
  }

  return (

    <div
      className="
        fixed
        inset-0
        bg-black/70
        flex
        items-center
        justify-center
        p-4
        z-50
      "
    >

      <div
        className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          p-6
          w-full
          max-w-lg
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            mb-6
          "
        >

          <h2
            className="
              text-2xl
              font-bold
            "
          >

            {title}

          </h2>

          <button
            onClick={onClose}
          >

            ✕

          </button>

        </div>

        {children}

      </div>

    </div>
  );
}