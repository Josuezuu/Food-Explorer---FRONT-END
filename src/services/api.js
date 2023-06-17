import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-6vdh.onrender.com",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("@foodexplorer:token");

    if (token) {
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);
