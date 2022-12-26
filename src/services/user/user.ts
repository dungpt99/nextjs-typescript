import { request } from "../axios/axios";

export const login = async (headers: object) => {
  const data = await request.post("/auth/signin", {}, headers);
  return data;
};
