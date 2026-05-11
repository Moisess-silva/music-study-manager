import {
  api,
} from "./api";

export interface DashboardStats {

  totalTrainings: number;

  totalMinutes: number;

  averageBpm: number;
}

export async function getDashboardStats() {

  const response =
    await api.get<DashboardStats>(
      "/dashboard/stats"
    );

  return response.data;
}