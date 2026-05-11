import { api }
from "./api";

export async function getMajorField(
  note: string
) {

  const response =
    await api.get(
      `/theory/major/${note}`
    );

  return response.data;
}