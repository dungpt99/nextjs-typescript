import { request } from "../axios/axios";

export const login = async (privateKey: string) => {
  if (privateKey === "admin") return privateKey;
  else {
    throw "error";
  }
};
