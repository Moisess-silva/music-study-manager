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
  useToast,
} from "../../hooks/useToast";

import {
  createInstrument,
  deleteInstrument,
  getInstruments,
} from "../../services/instrumentService";

interface Instrument {

  id: string;

  name: string;

  type: string;
}

export function InstrumentsPage() {

  const {
    showToast,
  } = useToast();

  const [instruments, setInstruments] =
    useState<Instrument[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [name, setName] =
    useState("");

  const [type, setType] =
    useState("");

  useEffect(() => {

    loadInstruments();

  }, []);

  async function loadInstruments() {

    try {

      setLoading(true);

      const data =
        await getInstruments();

      setInstruments(data);

    } finally {

      setLoading(false);
    }
  }

  async function handleCreateInstrument(
    event: React.FormEvent
  ) {

    event.preventDefault();

    await createInstrument({
      name,
      type,
    });

    showToast(
      "Instrumento criado!"
    );

    setName("");
    setType("");

    loadInstruments();
  }

  async function handleDelete(
    id: string
  ) {

    await deleteInstrument(id);

    showToast(
      "Instrumento removido!"
    );

    loadInstruments();
  }

  return (

    <AppLayout>

      <div className="flex flex-col gap-6">

        <div>

          <h1 className="text-3xl font-bold">

            Instrumentos

          </h1>

        </div>

        <Card>

          <form
            onSubmit={handleCreateInstrument}
            className="flex flex-col gap-4"
          >

            <Input
              label="Nome"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <Input
              label="Tipo"
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
            />

            <Button type="submit">

              Criar instrumento

            </Button>

          </form>

        </Card>

        {
          loading
            ? <Loading />
            : instruments.length === 0
            ? (

              <EmptyState
                title="Nenhum instrumento"
                description="Crie instrumentos."
              />
            )
            : (

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {
                  instruments.map(
                    (instrument) => (

                      <Card
                        key={instrument.id}
                      >

                        <div className="flex flex-col gap-4">

                          <div>

                            <h2 className="text-xl font-bold">

                              {instrument.name}

                            </h2>

                            <p className="text-zinc-400">

                              {instrument.type}

                            </p>

                          </div>

                          <Button
                            onClick={() =>
                              handleDelete(
                                instrument.id
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