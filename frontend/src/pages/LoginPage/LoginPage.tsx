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
  login,
} from "../../services/authService";

import {
  useToast,
} from "../../hooks/useToast";

export function LoginPage() {

  const navigate =
    useNavigate();

  const {
    showToast,
  } = useToast();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(
    event: React.FormEvent
  ) {

    event.preventDefault();

    try {

      setLoading(true);

      const response =
        await login({
          email,
          password,
        });

      localStorage.setItem(
        "token",
        response.token
      );

      showToast(
        "Login realizado!"
      );

      navigate("/dashboard");

    } catch {

      showToast(
        "Erro ao fazer login"
      );

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
          onSubmit={handleLogin}
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

              Music Study

            </h1>

            <p
              className="
                text-zinc-400
                mt-2
              "
            >

              Entre na sua conta.

            </p>

          </div>

          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button type="submit">

            {
              loading
                ? "Entrando..."
                : "Entrar"
            }

          </Button>

        </form>

      </Card>

    </div>
  );
}