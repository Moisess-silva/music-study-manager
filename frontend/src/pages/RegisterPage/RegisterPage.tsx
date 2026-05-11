import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

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
  register,
} from "../../services/authService";

export function RegisterPage() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleRegister(
    event: React.FormEvent
  ) {

    event.preventDefault();

    try {

      setLoading(true);

      await register({
        name,
        email,
        password,
      });

      navigate("/");

    } finally {

      setLoading(false);
    }
  }

  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-zinc-950
        p-6
      "
    >

      <Card
        className="
          w-full
          max-w-md
        "
      >

        <form
          onSubmit={handleRegister}
          className="
            flex
            flex-col
            gap-4
          "
        >

          <div>

            <h1
              className="
                text-3xl
                font-bold
              "
            >

              Criar conta

            </h1>

            <p
              className="
                text-zinc-400
                mt-2
              "
            >

              Comece sua jornada musical.

            </p>

          </div>

          <Input
            label="Nome"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <Input
            label="E-mail"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button type="submit">

            {
              loading
                ? "Criando..."
                : "Criar conta"
            }

          </Button>

        </form>

      </Card>

    </div>
  );
}