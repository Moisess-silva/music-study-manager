import {
  api,
} from "./api";

export interface Repertoire {

  id: string;

  title: string;

  artist: string;

  status: string;
}

export interface CreateRepertoireDTO {

  title: string;

  artist: string;

  status: string;
}

export async function getRepertoires() {

  const response =
    await api.get<Repertoire[]>(
      "/repertoire"
    );

  return response.data;
}

export async function createRepertoire(
  data: CreateRepertoireDTO
) {

  const response =
    await api.post(
      "/repertoire",
      data
    );

  return response.data;
}

export async function deleteRepertoire(
  id: string
) {

  await api.delete(
    `/repertoire/${id}`
  );
}