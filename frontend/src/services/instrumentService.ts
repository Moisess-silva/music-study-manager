import {
  api,
} from "./api";

interface CreateInstrumentDTO {

  name: string;

  type: string;
}

export async function getInstruments() {

  const response =
    await api.get(
      "/instruments"
    );

  return response.data;
}

export async function createInstrument(
  data: CreateInstrumentDTO
) {

  const response =
    await api.post(
      "/instruments",
      data
    );

  return response.data;
}

export async function deleteInstrument(
  id: string
) {

  await api.delete(
    `/instruments/${id}`
  );
}