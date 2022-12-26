import * as React from "react";
import classNames from "classnames/bind";

import styles from "./button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export interface IButtonProps {
  children: string;
  rounded?: boolean;
  backgroundColorNone?: boolean;
  textDecoration?: boolean;
  handleOnClick?: any;
  className?: any;
  disabled?: boolean;
  btnAdd?: boolean;
  btnDelete?: boolean;
}

export default function Button(props: IButtonProps) {
  const {
    children,
    rounded,
    backgroundColorNone,
    textDecoration,
    handleOnClick,
    className,
    btnAdd,
    btnDelete,
    ...attribute
  } = props;
  const classes = cx("wrapper", {
    rounded,
    backgroundColorNone,
    textDecoration,
    [className]: className,
    btnAdd,
    btnDelete,
  });
  return (
    <button className={classes} onClick={handleOnClick} {...attribute}>
      {btnAdd && <FontAwesomeIcon icon={faPlus} className={cx("icon")} />}
      {btnDelete && <FontAwesomeIcon icon={faTrash} className={cx("icon")} />}
      {children}
    </button>
  );
}
