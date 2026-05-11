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
  createRepertoire,
  deleteRepertoire,
  getRepertoires,
} from "../../services/repertoireService";

interface Repertoire {

  id: string;

  title: string;

  artist: string;

  status: string;
}

export function RepertoirePage() {

  const {
    showToast,
  } = useToast();

  const [repertoires, setRepertoires] =
    useState<Repertoire[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [title, setTitle] =
    useState("");

  const [artist, setArtist] =
    useState("");

  const [status, setStatus] =
    useState("");

  useEffect(() => {

    loadRepertoires();

  }, []);

  async function loadRepertoires() {

    try {

      setLoading(true);

      const data =
        await getRepertoires();

      setRepertoires(data);

    } finally {

      setLoading(false);
    }
  }

  async function handleCreateRepertoire(
    event: React.FormEvent
  ) {

    event.preventDefault();

    await createRepertoire({
      title,
      artist,
      status,
    });

    showToast(
      "Música adicionada!"
    );

    setTitle("");
    setArtist("");
    setStatus("");

    loadRepertoires();
  }

  async function handleDelete(
    id: string
  ) {

    await deleteRepertoire(id);

    showToast(
      "Música removida!"
    );

    loadRepertoires();
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

            Repertório

          </h1>

          <p
            className="
              text-zinc-400
              mt-2
            "
          >

            Gerencie suas músicas.

          </p>

        </div>

        <Card>

          <form
            onSubmit={
              handleCreateRepertoire
            }
            className="
              flex
              flex-col
              gap-4
            "
          >

            <Input
              label="Título"
              placeholder="Ex: Wonderwall"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <Input
              label="Artista"
              placeholder="Ex: Oasis"
              value={artist}
              onChange={(e) =>
                setArtist(e.target.value)
              }
            />

            <Input
              label="Status"
              placeholder="Learning / Practicing / Mastered"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            />

            <Button type="submit">

              Adicionar música

            </Button>

          </form>

        </Card>

        {
          loading
            ? <Loading />
            : repertoires.length === 0
            ? (

              <EmptyState
                title="Nenhuma música"
                description="Adicione músicas ao repertório."
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
                  repertoires.map(
                    (music) => (

                      <Card
                        key={music.id}
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

                              {music.title}

                            </h2>

                            <p
                              className="
                                text-zinc-400
                              "
                            >

                              {music.artist}

                            </p>

                          </div>

                          <span
                            className="
                              text-sm
                              font-medium
                            "
                          >

                            {music.status}

                          </span>

                          <Button
                            onClick={() =>
                              handleDelete(
                                music.id
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