import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
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

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return new Promise((resolve) => {
    req.headers.cookie = "";

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";

      proxyRes.once("data", function (chunk) {
        body += chunk;
      });

      proxyRes.on("end", function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== "development" });

          cookies.set("accessToken", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expiredAt),
          });

          (res as NextApiResponse).status(200).json({ message: "Login success" });
        } catch (error) {
          (res as NextApiResponse).status(500).json({ message: "Something went wrong" });
        }

        resolve(true);
      });
    };

    proxy.once("proxyRes", handleLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });

    proxy.once("proxyRes", () => {
      resolve(true);
    });
  });
}
