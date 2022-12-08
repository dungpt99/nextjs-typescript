import React from "react";
import classNames from "classnames/bind";

import styles from "./admin.module.scss";
import { DefaultLayout } from "../../layouts";

const cx = classNames.bind(styles);

export default function Admin() {
  return (
    <div className={cx("wrapper")}>
      <span>Admin pages</span>
    </div>
  );
}

Admin.getLayout = function getLayout(admin: React.ReactElement) {
  return <DefaultLayout>{admin}</DefaultLayout>;
};
