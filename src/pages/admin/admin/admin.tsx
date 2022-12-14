import React, { useEffect } from "react";
import classNames from "classnames/bind";
import { ToastContainer } from "react-toastify";

import styles from "./admin.module.scss";
import { DefaultLayout } from "../../../layouts";
import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useAppSelector } from "../../../config/store";
import Toast from "../../../components/Toast";
import { TypeToast } from "../../../common/enum";

const cx = classNames.bind(styles);

export default function Admin() {
  const loginSuccess = useAppSelector((state) => state.authentication.loginSuccess);
  useEffect(() => {
    Toast(TypeToast.SUCCESS, "Login success");
  }, [loginSuccess]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <Text fontBold>Admin management</Text>
      </div>
      <div className={cx("search")}>
        <Input type="text" />
        <Button size="small">Search</Button>
      </div>
      <ToastContainer />
    </div>
  );
}

Admin.getLayout = function getLayout(admin: React.ReactElement) {
  return <DefaultLayout>{admin}</DefaultLayout>;
};
