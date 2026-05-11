import axios from "axios";

export const api =
  axios.create({

    baseURL:
      "http://localhost:8080",
  });

api.interceptors.request.use(

  (config) => {

    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

api.interceptors.response.use(

  (response) => response,

  (error) => {

    if (
      error.response?.status === 401
    ) {

      localStorage.removeItem(
        "token"
      );

      window.location.href = "/";
    }

    if (
      error.response?.status === 403
    ) {

      console.error(
        "Acesso negado"
      );
    }

    if (
      error.response?.status >= 500
    ) {

      console.error(
        "Erro interno do servidor"
      );
    }

    return Promise.reject(error);
  }
);