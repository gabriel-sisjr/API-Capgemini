import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:44379/api/capgemini",
});

export default api;
