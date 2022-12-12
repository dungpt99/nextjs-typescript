import React from "react";
import classNames from "classnames/bind";

import styles from "./header.module.scss";
import Image from "next/image";
import Text from "../../../components/Text";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

const myLoader = ({ src, width, quality }: any) => {
  return `https://via.placeholder.com/${src}}`;
};

export default function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("brand")}>
        <Image loader={myLoader} src="150" alt="Picture of the brand" width={100} height={100} />
      </div>
      <div className={cx("content")}>
        <div className={cx("content__title")}>
          <Text fontBold uppercase>
            Blockchain management
          </Text>
        </div>
        <div className={cx("content__user")}>
          <div className={cx("user__info")}>
            <div className={cx("info__img")}>
              <Image loader={myLoader} src="150" alt="Picture of the user" width={50} height={50} />
            </div>
            <Text>AD0001</Text>
          </div>
          <div className={cx("user__signOut")}>
            <Button size="small" backgroundColorNone textDecoration>
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
