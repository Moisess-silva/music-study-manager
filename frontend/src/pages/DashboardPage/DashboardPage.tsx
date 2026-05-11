import {
  useEffect,
  useState,
} from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  AppLayout,
} from "../../layouts/AppLayout/AppLayout";

import {
  Card,
} from "../../components/ui/Card";

import {
  Loading,
} from "../../components/ui/Loading";

import {
  getDashboardStats,
} from "../../services/DashboardService";

import type {
  DashboardStats,
} from "../../services/DashboardService";



export function DashboardPage() {

  const [stats, setStats] =
    useState<DashboardStats | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  async function loadStats() {

    try {

      const data =
        await getDashboardStats();

      setStats(data);

    } finally {

      setLoading(false);
    }
  }

  useEffect(() => {

    loadStats();

  }, []);

  if (loading) {

    return (

      <AppLayout>

        <Loading />

      </AppLayout>
    );
  }

  const chartData = [

    {
      name: "Treinos",
      value:
        stats?.totalTrainings || 0,
    },

    {
      name: "Minutos",
      value:
        stats?.totalMinutes || 0,
    },

    {
      name: "BPM Médio",
      value:
        stats?.averageBpm || 0,
    },
  ];

  return (

    <AppLayout>

      <div
        className="
          flex
          flex-col
          gap-6
        "
      >

        <div>

          <h1
            className="
              text-3xl
              font-bold
            "
          >

            Dashboard

          </h1>

          <p
            className="
              text-zinc-400
              mt-2
            "
          >

            Estatísticas musicais.

          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
          "
        >

          <Card>

            <div
              className="
                flex
                flex-col
                gap-2
              "
            >

              <span
                className="
                  text-zinc-400
                "
              >

                Total de Treinos

              </span>

              <strong
                className="
                  text-3xl
                "
              >

                {stats?.totalTrainings}

              </strong>

            </div>

          </Card>

          <Card>

            <div
              className="
                flex
                flex-col
                gap-2
              "
            >

              <span
                className="
                  text-zinc-400
                "
              >

                Total de Minutos

              </span>

              <strong
                className="
                  text-3xl
                "
              >

                {stats?.totalMinutes}

              </strong>

            </div>

          </Card>

          <Card>

            <div
              className="
                flex
                flex-col
                gap-2
              "
            >

              <span
                className="
                  text-zinc-400
                "
              >

                BPM Médio

              </span>

              <strong
                className="
                  text-3xl
                "
              >

                {Math.round(
                  stats?.averageBpm || 0
                )}

              </strong>

            </div>

          </Card>

        </div>

        <Card>

          <h2
            className="
              text-xl
              font-bold
              mb-6
            "
          >

            Estatísticas

          </h2>

          <div
            className="
              w-full
              h-80
            "
          >

            <ResponsiveContainer>

              <BarChart
                data={chartData}
              >

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#16a34a"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </Card>

      </div>

    </AppLayout>
  );
}