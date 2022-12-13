import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { TenantDataType } from "../../pages/admin/tenant/tenant.model";
interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

type TablePaginationPosition = "bottomCenter";

export interface ITableComponentProps {
  columns: ColumnsType<TenantDataType>;
  data: TenantDataType[];
}

export default function TableComponent(props: ITableComponentProps) {
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<TenantDataType>
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <Table
      columns={props.columns}
      dataSource={props.data}
      pagination={{
        ...tableParams.pagination,
        position: ["bottomCenter" as TablePaginationPosition],
      }}
      loading={loading}
      onChange={handleTableChange}
    />
  );
}
