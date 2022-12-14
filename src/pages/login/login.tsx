import React, { useState } from "react";
import classNames from "classnames/bind";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./login.module.scss";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAppDispatch, useAppSelector } from "../../config/store";
import { authenticate } from "../../config/reducers/authentication/authentication";
import Link from "next/link";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const router = useRouter();
  const [privateKey, setPrivateKey] = useState("");
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.authentication.isAuthenticated);
  const loginError = useAppSelector((state) => state.authentication.loginError);

  const handleLogin = async () => {
    dispatch(authenticate(privateKey));
  };

  if (isAuthenticated) {
    router.push("admin/admin");
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("content__icon")}>
          <FontAwesomeIcon icon={faWallet} size={"10x"} />
        </div>
        <div className={cx("content__title")}>
          <Text fontBold>Sign in with your wallet</Text>
        </div>
        <Text>Please enter your private key</Text>
        <div className={cx("content__input")}>
          <Input
            type={"password"}
            borderBottom
            value={privateKey}
            onChangeValue={(e: React.FormEvent<HTMLInputElement>) =>
              setPrivateKey(e.currentTarget.value)
            }
          />
        </div>
        {loginError && <Text warning>Private key is not valid</Text>}
        <div className={cx("content__button")}>
          <Button rounded size="md" handleOnClick={handleLogin}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
