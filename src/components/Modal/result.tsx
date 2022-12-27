import { Modal } from "antd";
import React from "react";
import classNames from "classnames/bind";

import styles from "./modal.module.scss";

const cx = classNames.bind(styles);

export interface IResultProps {
  title: React.ReactElement | null;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  style?: object;
  children: React.ReactElement | boolean;
}

export default function Result(props: IResultProps) {
  const { isModalOpen, handleOk, handleCancel, style, children, title } = props;
  return (
    <Modal
      title={title}
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
      style={style}
      footer={null}
    >
      {children}
    </Modal>
  );
}
