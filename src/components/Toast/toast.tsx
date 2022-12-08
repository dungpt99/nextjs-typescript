import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TypeToast } from "../../common/enum";

export interface IToastProps {
  type: TypeToast;
  message: string;
}

export default function Toast(props: IToastProps) {
  return toast[props.type](<div>{props.message}</div>);
}
