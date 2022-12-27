import axios from "axios";

class Axios {
  contentType: string;
  api: any;
  headers: object;
  constructor(baseUrl: string, contentType = "application/json") {
    this.contentType = contentType;
    this.api = axios.create({
      baseURL: baseUrl,
    });
    this.headers = {
      "Content-Type": this.contentType,
      platform: "web",
    };
  }

  setHeaders(headers: object) {
    this.headers = { ...this.headers, ...headers };
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
      headers: this.headers,
    });
  }

  // Method post
  post(path: string, payload?: object) {
    return this.api({
      method: "post",
      url: path,
      data: payload,
      headers: this.headers,
    });
  }

  // Method put
  put(path: string, payload: string) {
    return this.api.request({
      method: "PUT",
      url: path,
      data: payload,
      headers: this.headers,
    });
  }

  // Method delete
  delete(path: string, id: string) {
    return this.api.request({
      method: "DELETE",
      url: path + id,
      headers: this.headers,
    });
  }
}

export const request = new Axios(process.env.NEXT_PUBLIC_HOST as string);
export const formDataRequest = new Axios(
  process.env.NEXT_PUBLIC_HOST as string,
  process.env.NEXT_PUBLIC_TYPE
);
