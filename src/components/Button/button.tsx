import * as React from "react";
import classNames from "classnames/bind";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./button.module.scss";

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
  btnDeleteStatus?: boolean;
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
    btnDeleteStatus,
    ...attribute
  } = props;
  const classes = cx("wrapper", {
    rounded,
    backgroundColorNone,
    textDecoration,
    [className]: className,
    btnAdd,
    btnDelete,
    btnDeleteStatus,
  });
  return (
    <button className={classes} onClick={handleOnClick} {...attribute}>
      {btnAdd && <FontAwesomeIcon icon={faPlus} className={cx("icon")} />}
      {btnDelete && <FontAwesomeIcon icon={faTrash} className={cx("icon")} />}
      {children}
    </button>
  );
}
