import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { TablePaginationConfig } from "antd";

import styles from "./tenant.module.scss";
import { DefaultLayout } from "../../../layouts";
import TableComponent from "../../../components/Table";
import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { columnsTenant, TenantDataType } from "./tenant.model";
import { getTenant } from "../../../services/tenant";
import toastNotify from "../../../components/Toast";
import { TypeToast } from "../../../common/enum";
import { TableParams } from "../../../components/Table/table";

const cx = classNames.bind(styles);

export default function Tenant() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { data } = await getTenant("/tenant", {
          page: tableParams.pagination?.current,
          pageSize: tableParams.pagination?.pageSize,
        });
        setData(data.data);
        setLoading(false);
        setTableParams({
          pagination: {
            current: data.pagination.currentPage,
            pageSize: data.pagination.pageSize,
            total: data.pagination.totalCount,
          },
        });
      } catch (error) {
        toastNotify(TypeToast.ERROR, (error as Error).message);
      }
    }
    fetchData();
  }, []);

  const handleTableChange = async (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<TenantDataType> | SorterResult<TenantDataType>[]
  ) => {
    try {
      setLoading(true);
      const { data } = await getTenant("/tenant", {
        page: pagination.current,
        pageSize: pagination.pageSize,
      });

      setData(data.data);
      setLoading(false);
      setTableParams({
        pagination: {
          current: data.pagination.currentPage,
          pageSize: data.pagination.pageSize,
          total: data.pagination.totalCount,
        },
        filters,
        ...sorter,
      });
    } catch (error) {
      toastNotify(TypeToast.ERROR, (error as Error).message);
    }
  };

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
      <div className={cx("table")}>
        <TableComponent
          columns={columnsTenant}
          data={data}
          tableParams={tableParams}
          handleTableChange={handleTableChange}
          loading={loading}
        />
      </div>
    </div>
  );
}

Tenant.getLayout = function getLayout(tenant: React.ReactElement) {
  return <DefaultLayout>{tenant}</DefaultLayout>;
};
