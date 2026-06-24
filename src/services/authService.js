import axios from "axios";

const API = axios.create({
  baseURL: "https://food-1-vq0o.onrender.com/api",
});

export const registerUser = async (hashData) => {
  const response = await API.post(
    "/auth/register",
    hashData
  );

  return response.data;
};