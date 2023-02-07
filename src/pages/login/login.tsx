import React, { useState } from "react";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./login.module.scss";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";
import toastNotify from "../../components/Toast/toast";
import logo from "../../assets/images/logo.svg";
import banner1 from "../../assets/images/banner1.svg";
import banner2 from "../../assets/images/banner2.svg";
import { useAppDispatch, useAppSelector } from "../../config/store";
import { authenticate } from "../../config/reducers/authentication/authentication";
import { TypeToast } from "../../common/enum";
import { useAuth } from "../../hooks";

const cx = classNames.bind(styles);

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const router = useRouter();
  const [privateKey, setPrivateKey] = useState("");
  const [disabled, setDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.authentication.isAuthenticated);
  const loginError = useAppSelector((state) => state.authentication.loginError);
  const loginSuccess = useAppSelector((state) => state.authentication.loginSuccess);
  const { login, logout, profile } = useAuth({
    // revalidateOnMount: false,
  });

  if (loginSuccess) {
    toastNotify(TypeToast.SUCCESS, "Login success");
  }

  const handleLogin = async () => {
    try {
      await login();
      router.push("admin/admin");
    } catch (error) {
      console.log("fail to login", error);
    }
  };
  const handleGetProfile = async () => {
    // await login();
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("fail to login", error);
    }
  };

  if (isAuthenticated) {
    router.push("admin/admin");
  }

  const changeValueLogin = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value.length !== 0 ? setDisabled(false) : setDisabled(true);
    setPrivateKey(e.currentTarget.value);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("content__brand")}>
          <Text uppercase className={cx("brand__title")}>
            YOKOGAWA
          </Text>
          <Image src={logo} height={50} width={50} alt="Logo" />
        </div>
        <div className={cx("content__icon")}>
          <Image
            src={banner1}
            height={233}
            width={272}
            alt="Banner1"
            className={cx("content__icon--element1")}
          />
          <Image
            src={banner2}
            height={218}
            width={327}
            alt="Banner2"
            className={cx("content__icon--element2")}
          />
        </div>
        <div className={cx("content__button")}>
          <Button handleOnClick={handleLogin} className={cx("content__button--element")}>
            Login
          </Button>
        </div>
        <div className={cx("content__button")}>
          <Button handleOnClick={handleGetProfile} className={cx("content__button--element")}>
            Profile
          </Button>
        </div>
        <div className={cx("content__button")}>
          <Button handleOnClick={handleLogout} className={cx("content__button--element")}>
            Logout
          </Button>
        </div>
        <div>Profile: {JSON.stringify(profile || {}, null, 4)}</div>
      </div>
    </div>
  );
}
