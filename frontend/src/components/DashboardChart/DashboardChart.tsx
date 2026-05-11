import {

  ResponsiveContainer,

  BarChart,

  Bar,

  XAxis,

  YAxis,

  Tooltip,

} from "recharts";

interface Props {

  totalDuration: number;

  averageBpm: number;
}

export function DashboardChart({

  totalDuration,

  averageBpm,

}: Props) {

  const data = [

    {
      name: "Tempo",
      value: totalDuration,
    },

    {
      name: "BPM",
      value: averageBpm,
    },
  ];

  return (

    <div
      className="
        bg-zinc-900
        p-6
        rounded-2xl
        h-[100]
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >

        Estatísticas

      </h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <BarChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}