import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";

type Data = {
  data: any;
  pagination: any;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const cookies = new Cookies(req, res);
  cookies.set("accessToken");
  (res as NextApiResponse).status(200).json({ message: "Logout success" });
}
