import api from "../index";

export interface User {
  id: number;
  name: string;
  email: string;
}

export async function getUsers(): Promise<User[]> {
  const res = await api.get("/users");
  return res.data;
}
