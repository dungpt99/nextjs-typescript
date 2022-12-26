import * as React from "react";
import classNames from "classnames/bind";
import { Select } from "antd";
import type { SelectProps } from "antd";

import styles from "./select.module.scss";

const cx = classNames.bind(styles);

export interface ISelectComponentProps {
  label: string;
  options: SelectProps["options"];
  handleChange: (value: string) => void;
  display?: string | any;
}

export default function SelectComponent(props: ISelectComponentProps) {
  const { label, options, handleChange, display } = props;
  const classes = cx("select");
  return (
    <div className={cx("wrapper", { [display]: display })}>
      <label>{label}</label>
      <Select
        mode="tags"
        placeholder="Tags Mode"
        onChange={handleChange}
        options={options}
        className={classes}
      />
    </div>
  );
}
