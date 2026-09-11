import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api`,
  withCredentials: true,
});

const useApi = () => {
  
  api.defaults.headers.common.Authorization = localStorage.getItem("accessToken")
    ? `Bearer ${localStorage.getItem("accessToken")}`
    : "";

  return api;
};

export default useApi;



