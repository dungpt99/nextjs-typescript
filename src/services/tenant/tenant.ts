import { request } from "../axios/axios";

export const getTenant = async (path: string, params?: object) => {
  const response = await request.get(path, params || {});
  return response.data;
};
