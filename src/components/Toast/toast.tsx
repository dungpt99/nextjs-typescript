import * as React from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { TypeToast } from "../../common/enum";

export default function Toast(type: TypeToast, message: string) {
  return toast[type](<div>{message}</div>);
}
