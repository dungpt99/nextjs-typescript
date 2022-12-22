import { request } from "../axios/axios";

export const login = async () => {
  const data = await request.post("/auth/signin", {});
  return data;
};
