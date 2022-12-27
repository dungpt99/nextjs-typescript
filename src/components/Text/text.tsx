import * as React from "react";
import classNames from "classnames/bind";

import styles from "./text.module.scss";

const cx = classNames.bind(styles);

export interface ITextProps {
  children: string;
  warning?: boolean;
  fontBold?: boolean;
  uppercase?: boolean;
  className?: any;
}

export default function Text(props: ITextProps) {
  const classes = cx("wrapper", {
    warning: props.warning,
    fontBold: props.fontBold,
    uppercase: props.uppercase,
    [props.className]: props.className,
  });

  return <div className={classes}>{props.children}</div>;
}
