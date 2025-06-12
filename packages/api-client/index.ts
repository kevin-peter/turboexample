import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
