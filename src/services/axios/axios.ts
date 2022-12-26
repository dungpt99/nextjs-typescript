import axios from "axios";

class Axios {
  contentType: string;
  api: any;
  constructor(baseUrl: string, contentType = "application/json") {
    this.contentType = contentType;
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  headers(address?: string, requestTime?: string, signature?: string) {
    let permission = "";
    // let route = window.route;
    // if (route && route.meta) {
    //   const { permissions } = route.meta;
    //   if (permissions && permissions.length > 0) {
    //     permission = permissions[0];
    //   }
    // }
    // let token = this.getCookie("access_token");
    return {
      headers: {
        "Content-Type": this.contentType,
        Authorization: "",
        platform: "web",
        permission: permission,
        "User-Public-Key": address ? address : "",
        "User-Request-Time": requestTime ? requestTime : "",
        "User-Signature": signature ? signature : "",
      },
    };
  }

  // getCookie(name: string) {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(";").shift();
  // }

  // Method get
  get(path: string, params: object) {
    return this.api({
      method: "get",
      url: path,
      params: params,
      ...this.headers(),
    });
  }

  // Method post
  post(path: string, payload?: object, headers?: object) {
    return this.api({
      method: "post",
      url: path,
      headers,
      data: payload,
    });
  }

  // Method put
  put(path: string, payload: string) {
    return this.api.request({
      method: "PUT",
      url: path,
      data: payload,
      ...this.headers(),
    });
  }

  // Method delete
  delete(path: string, payload: string) {
    return this.api.request({
      method: "DELETE",
      url: path,
      data: payload,
      ...this.headers(),
    });
  }
}

export const request = new Axios(process.env.NEXT_PUBLIC_HOST as string);
export const formDataRequest = new Axios(
  process.env.NEXT_PUBLIC_HOST as string,
  process.env.NEXT_PUBLIC_TYPE
);
