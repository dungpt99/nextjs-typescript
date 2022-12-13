import { ColumnsType } from "antd/es/table";

export interface AdminDataType {
  No: number;
  TenantId: string;
  TenantName: string;
  UserId: string;
  Address: string;
  Balance: string;
  Role: string;
  WalletStatus: string;
}

export const columnsAdmin: ColumnsType<AdminDataType> = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "AdminId",
    dataIndex: "adminId",
    key: "adminId",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Create time",
    dataIndex: "create time",
    key: "create time",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
