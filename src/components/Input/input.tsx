import * as React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./input.module.scss";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export interface IInputProps {
  type: string;
  borderBottom?: boolean;
  value?: string;
  label?: string;
  disabled?: boolean;
  display?: string | any;
  placeholder?: string;
  error?: boolean;
  onChangeValue?: any;
  classlabel?: string | any;
  classinput?: string | any;
}

export default function Input(props: IInputProps) {
  const { borderBottom, label, display, onChangeValue, error, ...attribute } = props;
  const classInput = cx("input", { borderBottom, [props.classinput]: props.classinput, error });
  const classLabel = cx("label", { [props.classlabel]: props.classlabel });

  return (
    <div className={cx("wrapper", { [display]: display })}>
      <label className={classLabel}>{label}</label>
      <div className={cx("wrapper__input")}>
        <input className={classInput} {...attribute} onChange={onChangeValue} />
        {error && <FontAwesomeIcon icon={faCircleExclamation} className={cx("error__icon")} />}
      </div>
    </div>
  );
}
