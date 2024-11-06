import axios from "axios";

const api = axios.create({
  baseURL: "https://pack-and-promote.azurewebsites.net/",
});

export default api;