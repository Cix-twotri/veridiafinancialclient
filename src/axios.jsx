import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://sql10.freesqldatabase.com3306/sql10721950/",
  withCredentials: true,
});
