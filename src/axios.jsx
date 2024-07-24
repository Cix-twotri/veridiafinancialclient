import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://veridianfinancial-5b09422bf567.herokuapp.com/",
  withCredentials: true,
});
