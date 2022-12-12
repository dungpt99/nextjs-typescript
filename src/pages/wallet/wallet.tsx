import React from "react";
import classNames from "classnames/bind";

import styles from "./wallet.module.scss";
import { DefaultLayout } from "../../layouts";

const cx = classNames.bind(styles);

export default function Wallet() {
  return <div className={cx("wrapper")}>wallet pages</div>;
}

Wallet.getLayout = function getLayout(wallet: React.ReactElement) {
  return <DefaultLayout>{wallet}</DefaultLayout>;
};
