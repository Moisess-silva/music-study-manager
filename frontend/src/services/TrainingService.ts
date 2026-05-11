import { api }
from "./api";

import type { Training }
from "../types/training";

interface CreateTrainingDTO {

  category: string;

  duration: number;

  bpm: number;

  notes: string;

  instrumentId: string;
}

export async function getTrainings() {

  const response =
    await api.get<Training[]>("/training");

  return response.data;
}

export async function createTraining(
  data: CreateTrainingDTO
) {

  const response =
    await api.post(
      "/training",
      data
    );

  return response.data;
}

export async function deleteTraining(
  id: string
) {

  await api.delete(
    `/training/${id}`
  );
}