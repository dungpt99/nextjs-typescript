import { request } from "../axios/axios";

const login = async () => {
  const data = await request.post("/auth/signin", {});
  return data;
};

const createAdmin = async () => {
  const { data } = await request.post("user", { role: "admin" });
  return data;
};

const getAllAdmin = async (params: object) => {
  const { data } = await request.get("/user/get-list/admin", params);
  return data;
};

const deleteAdmin = async (id: string) => {
  await request.delete("/user/", id);
};

export { login, getAllAdmin, deleteAdmin, createAdmin };
