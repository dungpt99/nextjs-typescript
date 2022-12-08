import React from "react";
import classNames from "classnames/bind";

import styles from "./tenant.module.scss";

const cx = classNames.bind(styles);

export default function Tenant() {
  return <div className={cx("wrapper")}>tenant pages</div>;
}
