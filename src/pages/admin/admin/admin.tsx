import React from "react";
import classNames from "classnames/bind";

import styles from "./admin.module.scss";
import { DefaultLayout } from "../../../layouts";
import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

export default function Admin() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <Text fontBold>Admin management</Text>
      </div>
      <div className={cx("search")}>
        <Input type="text" />
        <Button size="small">Search</Button>
      </div>
    </div>
  );
}

Admin.getLayout = function getLayout(admin: React.ReactElement) {
  return <DefaultLayout>{admin}</DefaultLayout>;
};
