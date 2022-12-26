import React, { useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./admin.module.scss";
import { DefaultLayout } from "../../../layouts";
import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useAppSelector } from "../../../config/store";
import { useRouter } from "next/router";
import { request } from "../../../services/axios/axios";

const cx = classNames.bind(styles);

export default function Admin() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.authentication.isAuthenticated);
  if (!isAuthenticated && typeof window !== "undefined") {
    router.push("/login");
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <Text fontBold>Admin management</Text>
      </div>
      <div className={cx("search")}>
        <Input type="text" />
        <Button>Search</Button>
      </div>
    </div>
  );
}

Admin.getLayout = function getLayout(admin: React.ReactElement) {
  return <DefaultLayout>{admin}</DefaultLayout>;
};
