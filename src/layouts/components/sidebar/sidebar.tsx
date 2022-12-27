import React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { faWallet, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import Text from "../../../components/Text";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Tenant from "../../../assets/images/tenant.svg";
import User from "../../../assets/images/user.svg";
import Wallet from "../../../assets/images/wallet.svg";

const cx = classNames.bind(styles);

const tab = [
  { key: "Tenant Management", icon: Tenant, link: "tenant" },
  { key: "User Management", icon: Wallet, link: "wallet" },
  { key: "Admin Management", icon: User, link: "admin" },
];

export default function Sidebar() {
  const router = useRouter();

  const handleClick = (e: any) => {};
  return (
    <div className={cx("wrapper")}>
      <ul>
        {tab.map((element, index) => (
          <li key={index}>
            <Link className={cx("item")} href={element.link} onClick={handleClick}>
              <div className={cx("item__icon")}>
                <Image src={element.icon} alt="Logo" width={16} height={18} />
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
