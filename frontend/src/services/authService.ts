import {
  api,
} from "./api";

interface LoginDTO {

  email: string;

  password: string;
}

interface RegisterDTO {

  name: string;

  email: string;

  password: string;
}

export async function login(
  data: LoginDTO
) {

  const response =
    await api.post(
      "/auth/login",
      data
    );

  localStorage.setItem(
    "token",
    response.data.token
  );

  return response.data;
}

export async function register(
  data: RegisterDTO
) {

  const response =
    await api.post(
      "/auth/register",
      data
    );

  return response.data;
}