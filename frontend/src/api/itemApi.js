import axios from "axios";

const rawApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5001/api";
const normalizedApiUrl = rawApiUrl.endsWith("/api")
  ? rawApiUrl
  : rawApiUrl.replace(/\/+$/, "") + "/api";

const API = axios.create({
  baseURL: normalizedApiUrl,
});

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;