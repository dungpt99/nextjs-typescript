import * as React from "react";
import classNames from "classnames/bind";
import styles from "./default-layout.module.scss";

import Header from "../components/header";
import Sidebar from "../components/sidebar/sidebar";

const cx = classNames.bind(styles);
export interface IDefaultLayoutProps {
  children: React.ReactElement;
}

export default function DefaultLayout(props: IDefaultLayoutProps) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("body")}>
        <Sidebar />
        <div className={cx("content")}>{props.children}</div>
      </div>
    </div>
  );
}
