interface ToastProps {

  message: string;
}

export function Toast({
  message,
}: ToastProps) {

  return (

    <div
      className="
        fixed
        bottom-6
        right-6
        bg-green-600
        text-white
        px-6
        py-3
        rounded-xl
        shadow-lg
      "
    >

      {message}

    </div>
  );
}