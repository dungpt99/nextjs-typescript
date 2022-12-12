import * as React from "react";
import classNames from "classnames/bind";

import styles from "./button.module.scss";

const cx = classNames.bind(styles);

export interface IButtonProps {
  children: string;
  rounded?: boolean;
  size: string;
}

export default function Button(props: IButtonProps) {
  const classes = cx("wrapper", { rounded: props.rounded, [props.size]: props.size });
  return <button className={classes}>{props.children}</button>;
}
