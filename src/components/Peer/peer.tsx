import * as React from "react";
import classNames from "classnames/bind";

import styles from "./peer.module.scss";
import Text from "../Text";
import Image from "next/image";

const cx = classNames.bind(styles);

const myLoader = ({ src, width, quality }: any) => {
  return `https://via.placeholder.com/${src}}`;
};

export interface IPeerProps {}

export default function Peer(props: IPeerProps) {
  return (
    <div className={cx("wrapper")}>
      <Image loader={myLoader} src="50" alt="Picture of the brand" width={50} height={50} />
      <Text>Peer1</Text>
      <Text>Address</Text>
      <Text>Connection</Text>
    </div>
  );
}
