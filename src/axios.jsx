import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://www.veridianfinancial.online/api",
  withCredentials: true,
});
