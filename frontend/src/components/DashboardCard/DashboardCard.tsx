interface Props {

  title: string;

  value: string | number;
}

export function DashboardCard({
  title,
  value,
}: Props) {

  return (

    <div
      className="
        bg-zinc-900
        rounded-2xl
        p-6
        shadow-lg
      "
    >

      <h2
        className="
          text-zinc-400
          text-sm
        "
      >

        {title}

      </h2>

      <strong
        className="
          text-3xl
          mt-4
          block
        "
      >

        {value}

      </strong>

    </div>
  );
}