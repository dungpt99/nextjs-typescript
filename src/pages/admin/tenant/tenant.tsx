import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./tenant.module.scss";
import { DefaultLayout } from "../../../layouts";
import TableComponent from "../../../components/Table";
import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { columnsTenant } from "./tenant.model";

const cx = classNames.bind(styles);

export default function Tenant() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const a = [];
    for (let i = 1; i <= 100; i++) {
      a.push({
        tenantId: `${i}`,
        tenantName: `tenant name ${i}`,
        numberOfPeer: `numberOfPeer name ${i}`,
        numberOfUser: `numberOfUser name ${i}`,
        tenantBalance: `tenantBalance name ${i}`,
        totalMount: `totalMount name ${i}`,
        tenantStatus: `tenantStatus name ${i}`,
        action: `action name ${i}`,
      });
    }
    setData(a);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <Text fontBold>Tenant management</Text>
      </div>
      <div className={cx("search")}>
        <div className={cx("search__text")}>
          <Input type="text" />
        </div>
        <div className={cx("search__button")}>
          <Button size="sm">Search</Button>
        </div>
      </div>
      <TableComponent columns={columnsTenant} data={data} />
    </div>
  );
}

Tenant.getLayout = function getLayout(tenant: React.ReactElement) {
  return <DefaultLayout>{tenant}</DefaultLayout>;
};
