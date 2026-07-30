import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// GET Users
export const getUsers = async () => {
  console.log("🔥 GET USERS");

  const response = await api.get("/users");

  return response.data;
};

// POST User
export const addUser = async (newUser) => {
  console.log("🔥 ADD USER", newUser);

  const response = await api.post("/users", newUser);

  return response.data;
};

// DELETE User
export const deleteUser = async (id) => {
  console.log("🗑 DELETE USER", id);

  const response = await api.delete(`/users/${id}`);

  return response.data;
};
