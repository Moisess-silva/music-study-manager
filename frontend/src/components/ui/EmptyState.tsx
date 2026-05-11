interface EmptyStateProps {

  title: string;

  description: string;
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {

  return (

    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-10
        text-center
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

      <p
        className="
          text-zinc-400
          mt-3
        "
      >

        {description}

      </p>

    </div>
  );
}