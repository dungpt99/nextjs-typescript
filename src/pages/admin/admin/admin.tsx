import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ColumnsType, FilterValue, SorterResult } from "antd/es/table/interface";
import classNames from "classnames/bind";

import styles from "./admin.module.scss";
import { DefaultLayout } from "../../../layouts";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
import Table from "../../../components/Table";
import { AdminDataType } from "../../../common/interface/admin.model";
import toastNotify from "../../../components/Toast/toast";
import { TypeToast } from "../../../common/enum";
import { TablePaginationConfig } from "antd";
import { TableParams } from "../../../components/Table/table";

const cx = classNames.bind(styles);

const columnsAdmin: ColumnsType<AdminDataType> = [
  {
    title: "Admin ID",
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
    title: "",
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
export default function Admin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const router = useRouter();
  // const isAuthenticated = useAppSelector((state) => state.authentication.isAuthenticated);
  // if (!isAuthenticated && typeof window !== "undefined") {
  //   router.push("/login");
  // }
  const handleTableChange = async (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<AdminDataType> | SorterResult<AdminDataType>[]
  ) => {
    try {
      setLoading(true);
      // const { data } = await getTenant("/tenant", {
      //   page: pagination.current,
      //   pageSize: pagination.pageSize,
      // });

      // setData(data.data);
      // setLoading(false);
      // setTableParams({
      //   pagination: {
      //     current: data.pagination.currentPage,
      //     pageSize: data.pagination.pageSize,
      //     total: data.pagination.totalCount,
      //   },
      //   filters,
      //   ...sorter,
      // });
    } catch (error) {
      toastNotify(TypeToast.ERROR, (error as Error).message);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("action")}>
        <div className={cx("button")}>
          <Button className={cx("button__add")} btnAdd>
            Add
          </Button>
          <Button className={cx("button__delete")} btnDelete>
            Delete
          </Button>
        </div>
        <div className={cx("search")}>
          <Input
            type="text"
            placeholder="Search by id, address"
            classinput={cx("search__input")}
            search
          />
        </div>
      </div>
      <div className={cx("table")}>
        <Table
          columns={columnsAdmin}
          data={data}
          tableParams={tableParams}
          handleTableChange={handleTableChange}
          loading={loading}
        />
      </div>
    </div>
  );
}

Admin.getLayout = function getLayout(admin: React.ReactElement) {
  return <DefaultLayout>{admin}</DefaultLayout>;
};
