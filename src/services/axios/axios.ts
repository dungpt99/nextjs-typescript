import axios from "axios";

class Axios {
  contentType: string;
  api: any;
  constructor(baseUrl = process.env.REACT_APP_API_ROOT, contentType = "application/json") {
    this.contentType = contentType;
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  // Build headers request
  headers() {
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
      },
    };
  }

  // getCookie(name: string) {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(";").shift();
  // }

  // Method get
  get(path: string, params: string) {
    return this.api.request({
      method: "GET",
      url: path,
      params: params,
      ...this.headers(),
    });
  }

  // Method post
  post(path: string, payload: string) {
    return this.api.request({
      method: "POST",
      url: path,
      data: payload,
      ...this.headers(),
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
export const request = new Axios(process.env.HOST);
export const formDataRequest = new Axios(process.env.HOST, process.env.TYPE);
