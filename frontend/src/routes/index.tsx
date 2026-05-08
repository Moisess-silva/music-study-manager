import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { LoginPage } from "../pages/LoginPage/LoginPage";

export function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}