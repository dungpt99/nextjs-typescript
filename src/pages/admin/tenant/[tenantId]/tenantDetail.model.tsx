import { faTrash, faPen, faP } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColumnsType } from "antd/es/table";
import styles from "./tenant.module.scss";
import classNames from "classnames/bind";
import { useAppSelector } from "../../../../config/store";

const cx = classNames.bind(styles);
export interface TenantDataType {
  id: string;
  tenantId: string;
  tenantName: string;
  numberOfPeer: string;
  numberOfUser: string;
  tenantBalance: string;
  totalMount: string;
  tenantStatus: number;
  action: string;
}

export const columnsTenant: ColumnsType<TenantDataType> = [
  {
    title: "TenantId",
    dataIndex: "tenant_id",
    key: "tenantId",
    sorter: (a, b) => Number(a.tenantId) - Number(b.tenantId),
  },
  {
    title: "TenantName",
    dataIndex: "tenant_name",
    key: "tenantName",
    sorter: true,
  },
  {
    title: "Number of peer",
    dataIndex: "numberOfPeer",
    key: "numberOfPeer",
    sorter: true,
  },
  {
    title: "Number of user",
    dataIndex: "numberOfUser",
    key: "numberOfUser",
    sorter: true,
  },
  {
    title: "Tenant balance",
    dataIndex: "tenantBalance",
    key: "tenantBalance",
    sorter: true,
  },
  {
    title: "Total amount in user's wallet",
    dataIndex: "totalMount",
    key: "totalMount",
    sorter: true,
  },
  {
    title: "Tenant Status",
    dataIndex: "status",
    key: "tenantStatus",
    sorter: true,
    render: (text) => <span>{text === "1" ? "enable" : "disable"}</span>,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: () => (
      <div className={cx("table__action")}>
        <div className={cx("table__icon")}>
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div className={cx("table__icon")}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    ),
  },
];
