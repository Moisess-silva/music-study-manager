import {
  useEffect,
  useState,
} from "react";

import {
  AppLayout,
} from "../../layouts/AppLayout/AppLayout";

import {
  Card,
} from "../../components/ui/Card";

import {
  Input,
} from "../../components/ui/Input";

import {
  Button,
} from "../../components/ui/Button";

import {
  Loading,
} from "../../components/ui/Loading";

import {
  EmptyState,
} from "../../components/ui/EmptyState";

import {
  Timer,
} from "../../components/Timer";

import {
  useToast,
} from "../../hooks/useToast";

import {
  createTraining,
  deleteTraining,
  getTrainings,
} from "../../services/TrainingService";

interface Training {

  id: string;

  category: string;

  duration: number;

  bpm: number;

  notes: string;
}

export function TrainingPage() {

  const {
    showToast,
  } = useToast();

  const [trainings, setTrainings] =
    useState<Training[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [category, setCategory] =
    useState("");

  const [duration, setDuration] =
    useState("");

  const [bpm, setBpm] =
    useState("");

  const [notes, setNotes] =
    useState("");

  async function loadTrainings() {

    try {

      setLoading(true);

      const data =
        await getTrainings();

      setTrainings(data);

    } finally {

      setLoading(false);
    }
  }

  useEffect(() => {

    loadTrainings();

  }, []);

  async function handleCreateTraining(
    event: React.FormEvent
  ) {

    event.preventDefault();

    await createTraining({
      category,
      duration: Number(duration),
      bpm: Number(bpm),
      notes,
      instrumentId: "default",
    });

    showToast(
      "Treino salvo!"
    );

    setCategory("");
    setDuration("");
    setBpm("");
    setNotes("");

    loadTrainings();
  }

  async function handleDelete(
    id: string
  ) {

    await deleteTraining(id);

    showToast(
      "Treino removido!"
    );

    loadTrainings();
  }

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

            Treinos

          </h1>

          <p
            className="
              text-zinc-400
              mt-2
            "
          >

            Gerencie seus estudos.

          </p>

        </div>

        <Card>

          <Timer
            onFinish={() =>
              showToast(
                "Treino finalizado!"
              )
            }
          />

        </Card>

        <Card>

          <form
            onSubmit={
              handleCreateTraining
            }
            className="
              flex
              flex-col
              gap-4
            "
          >

            <Input
              label="Categoria"
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
            />

            <Input
              label="Duração"
              value={duration}
              onChange={(e) =>
                setDuration(
                  e.target.value
                )
              }
            />

            <Input
              label="BPM"
              value={bpm}
              onChange={(e) =>
                setBpm(
                  e.target.value
                )
              }
            />

            <Input
              label="Notas"
              value={notes}
              onChange={(e) =>
                setNotes(
                  e.target.value
                )
              }
            />

            <Button type="submit">

              Salvar treino

            </Button>

          </form>

        </Card>

        {
          loading
            ? <Loading />
            : trainings.length === 0
            ? (

              <EmptyState
                title="Nenhum treino"
                description="Adicione treinos."
              />
            )
            : (

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-4
                "
              >

                {
                  trainings.map(
                    (training) => (

                      <Card
                        key={training.id}
                      >

                        <div
                          className="
                            flex
                            flex-col
                            gap-4
                          "
                        >

                          <div>

                            <h2
                              className="
                                text-xl
                                font-bold
                              "
                            >

                              {training.category}

                            </h2>

                            <p>

                              {training.duration} min

                            </p>

                            <p>

                              BPM: {training.bpm}

                            </p>

                          </div>

                          <Button
                            onClick={() =>
                              handleDelete(
                                training.id
                              )
                            }
                          >

                            Excluir

                          </Button>

                        </div>

                      </Card>
                    )
                  )
                }

              </div>
            )
        }

      </div>

    </AppLayout>
  );
}