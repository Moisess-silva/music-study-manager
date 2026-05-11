import {
  useState,
} from "react";

import {
  AppLayout,
} from "../../layouts/AppLayout/AppLayout";

import {
  Card,
} from "../../components/ui/Card";

import {
  Button,
} from "../../components/ui/Button";

import {
  Input,
} from "../../components/ui/Input";

import {
  getMajorField,
} from "../../services/theoryService";


export function TheoryPage() {

  const [note, setNote] =
    useState("");

  const [field, setField] =
    useState<string[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function handleSearch() {

    try {

      setLoading(true);

      const response =
        await getMajorField(note);

      setField(response);

    } finally {

      setLoading(false);
    }
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

            Campo Harmônico

          </h1>

          <p
            className="
              text-zinc-400
              mt-2
            "
          >

            Gere campos harmônicos maiores.

          </p>

        </div>

        <Card>

          <div
            className="
              flex
              flex-col
              gap-4
            "
          >

            <Input
              label="Nota"
              placeholder="Ex: C"
              value={note}
              onChange={(e) =>
                setNote(e.target.value)
              }
            />

            <Button
              onClick={handleSearch}
            >

              {
                loading
                  ? "Calculando..."
                  : "Calcular"
              }

            </Button>

          </div>

        </Card>

        {
          field.length > 0 && (

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-4
              "
            >

              {
                field.map((chord) => (

                  <Card
                    key={chord}
                  >

                    <div
                      className="
                        h-24
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <strong
                        className="
                          text-2xl
                        "
                      >

                        {chord}

                      </strong>

                    </div>

                  </Card>
                ))
              }

            </div>
          )
        }

      </div>

    </AppLayout>
  );
}