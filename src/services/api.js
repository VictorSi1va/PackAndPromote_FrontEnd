import axios from "axios";

// Cria uma instância do Axios com a URL base da API
const api = axios.create({
  baseURL: "https://pack-and-promote.azurewebsites.net/",
});

export default api;