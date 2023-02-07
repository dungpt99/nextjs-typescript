import * as React from "react";
import classNames from "classnames/bind";
import styles from "./default-layout.module.scss";
import { ToastContainer } from "react-toastify";

import Header from "../components/header";
import Sidebar from "../components/sidebar/sidebar";
import Auth from "../../components/common/auth";

const cx = classNames.bind(styles);
export interface IDefaultLayoutProps {
  children: React.ReactElement;
}

export default function DefaultLayout(props: IDefaultLayoutProps) {
  return (
    <Auth>
      <div className={cx("wrapper")}>
        <Header />
        <div className={cx("body")}>
          <Sidebar />
          <div className={cx("content")}>{props.children}</div>
        </div>
        <ToastContainer />
      </div>
    </Auth>
  );
}
