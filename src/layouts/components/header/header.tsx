import React, { useState } from "react";
import classNames from "classnames/bind";
import { Modal } from "antd";

import styles from "./header.module.scss";
import Image from "next/image";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Logo from "../../../assets/images/logo.svg";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../../config/store";
import { logoutSession } from "../../../config/reducers/authentication/authentication";

const cx = classNames.bind(styles);

export default function Header() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(logoutSession());
    localStorage.removeItem("headers");
    router.replace("/login");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("brand")}>
        <Text className={cx("brand__text")}>YOKOGAWA</Text>
        <Image src={Logo} alt="Logo" width={12} height={12} />
      </div>
      <div className={cx("content")}>
        <div className={cx("content__title")}>
          <Text uppercase>Admin management</Text>
        </div>
        <div className={cx("content__user")}>
          <div className={cx("user__info")}>
            <Text>AD0001</Text>
          </div>
          <div className={cx("user__signOut")}>
            <Button
              textDecoration
              handleOnClick={showModal}
              className={cx("user__signOut--button")}
            >
              Sign out
            </Button>
            <Modal
              title={<Text className={cx("modal__title")}>Confirmation</Text>}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              centered
              transitionName=""
              okButtonProps={{
                children: "OK",
                style: {
                  backgroundColor: "#333",
                  color: "var(--white)",
                },
              }}
              cancelButtonProps={{
                children: "Cancel",
                style: {
                  backgroundColor: "#fff",
                  color: "black",
                  border: "1px solid black",
                },
              }}
              bodyStyle={{
                height: "80px",
              }}
              style={{
                border: "1px solid #333",
                borderRadius: "8px",
              }}
            >
              <Text className={cx("modal__content")}>Do you want to sign out?</Text>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
