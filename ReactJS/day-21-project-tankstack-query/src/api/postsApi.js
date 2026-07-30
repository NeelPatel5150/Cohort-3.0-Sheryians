import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => {
  console.log("🔥 POSTS API CALLED");

  const response = await api.get("/posts");

  return response.data;
};
  