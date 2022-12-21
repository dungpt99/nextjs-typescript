import * as React from "react";
import classNames from "classnames/bind";

import styles from "./button.module.scss";

const cx = classNames.bind(styles);

export interface IButtonProps {
  children: string;
  rounded?: boolean;
  backgroundColorNone?: boolean;
  textDecoration?: boolean;
  handleOnClick?: any;
  classNames?: any;
  disabled?: boolean;
}

export default function Button(props: IButtonProps) {
  const {
    children,
    rounded,
    backgroundColorNone,
    textDecoration,
    handleOnClick,
    classNames,
    ...attribute
  } = props;
  const classes = cx("wrapper", {
    rounded: rounded,
    backgroundColorNone: backgroundColorNone,
    textDecoration: textDecoration,
    [classNames]: classNames,
  });
  return (
    <button className={classes} onClick={handleOnClick} {...attribute}>
      {children}
    </button>
  );
}
