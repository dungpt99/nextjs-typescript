import { request } from "../axios/axios";

export const login = async (privateKey: string, params: string) => {
  const response = await request.post(`auth/signin/`, params);
  return response;
};
