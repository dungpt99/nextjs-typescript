import { Modal } from "antd";
import React from "react";
import classNames from "classnames/bind";

import ConfirmIcon from "../../assets/images/confirm.svg";
import styles from "./modal.module.scss";
import Image from "next/image";
import Button from "../Button";

const cx = classNames.bind(styles);

export interface IConfirmProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  action: string;
  warningText: string;
}

export default function Confirm(props: IConfirmProps) {
  const { isModalOpen, handleOk, handleCancel, action, warningText } = props;
  return (
    <Modal
      title={null}
      closable={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      transitionName=""
      style={{ textAlign: "center" }}
      footer={null}
      width={250}
    >
      <div className={cx("modal__confirm")}>
        <Image src={ConfirmIcon} alt="Logo" width={50} height={50} />
        <div className={cx("confirm__text")}>{warningText}</div>
        <div className={cx("confirm__button")}>
          <Button handleOnClick={handleCancel} className={cx("confirm__buttonCancel")}>
            Cancel
          </Button>
          <Button handleOnClick={handleOk} className={cx("confirm__buttonOk")}>
            {action}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
