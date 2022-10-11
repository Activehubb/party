import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://partymode-prev.herokuapp.com/",
});
