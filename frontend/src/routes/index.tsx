import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  LoginPage,
} from "../pages/LoginPage/LoginPage";

import {
  RegisterPage,
} from "../pages/RegisterPage/RegisterPage";

import {
  DashboardPage,
} from "../pages/DashboardPage/DashboardPage";

import {
  InstrumentsPage,
} from "../pages/InstrumentsPage/InstrumentPage";

import {
  TrainingPage,
} from "../pages/TrainingPage/TrainingPage";

import {
  RepertoirePage,
} from "../pages/RepertoirePage/RepertoirePage";

import {
  TheoryPage,
} from "../pages/TheoryPage/TheoryPage";

import {
  ProtectedRoute,
} from "./ProtectedRoute";

export function Router() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <DashboardPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/instruments"
          element={
            <ProtectedRoute>

              <InstrumentsPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/trainings"
          element={
            <ProtectedRoute>

              <TrainingPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/repertoire"
          element={
            <ProtectedRoute>

              <RepertoirePage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/theory"
          element={
            <ProtectedRoute>

              <TheoryPage />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}