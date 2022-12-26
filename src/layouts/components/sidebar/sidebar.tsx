import React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faWallet, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import Text from "../../../components/Text";
import Link from "next/link";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

const tab = [
  { key: "Tenant Management", icon: faLayerGroup, link: "tenant" },
  { key: "User's Wallet Management", icon: faWallet, link: "wallet" },
  { key: "Admin Management", icon: faUser, link: "admin" },
];

export default function Sidebar() {
  const router = useRouter();

  const handleClick = (e) => {
    console.log(router);
  };
  return (
    <div className={cx("wrapper")}>
      <ul>
        {tab.map((element, index) => (
          <li key={index}>
            <Link className={cx("item")} href={element.link} onClick={handleClick}>
              <div className={cx("item__icon")}>
                <FontAwesomeIcon icon={element.icon} size={"2x"} />
              </div>
              <div className={cx("item__text")}>
                <Text>{element.key}</Text>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
