import axios from "axios";

const token = window.localStorage.getItem("FCMB-TOKEN") || "";
export const axiosInstance = axios.create({
  baseURL: "https://u4xmpzqmc9.execute-api.af-south-1.amazonaws.com",
  headers: { Authorization: token },
});
