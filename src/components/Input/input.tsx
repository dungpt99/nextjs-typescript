import * as React from "react";
import classNames from "classnames/bind";

import styles from "./input.module.scss";

const cx = classNames.bind(styles);

export interface IInputProps {
  type: string;
  borderBottom?: boolean;
  value?: string;
  onChangeValue?: any;
}

export default function Input(props: IInputProps) {
  const classes = cx("wrapper", { borderBottom: props.borderBottom });
  return (
    <input
      className={classes}
      type={props.type}
      value={props.value}
      onChange={props.onChangeValue}
    />
  );
}
