import * as React from "react";
import classNames from "classnames/bind";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./login.module.scss";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";

const cx = classNames.bind(styles);

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
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
          <Input type={"text"} borderBottom />
        </div>
        <Text warning>Private key is not valid</Text>
        <div className={cx("content__button")}>
          <Button rounded size="md">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
