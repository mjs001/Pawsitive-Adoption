import axios from "axios";

export const fetchApi = axios.create({
  baseURL: "https://frontend-take-home-service.fetch.com",
  withCredentials: true,
})
