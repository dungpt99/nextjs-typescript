import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { TenantDataType } from "../../pages/admin/tenant/tenant.model";
export interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

type TablePaginationPosition = "bottomCenter";

export interface ITableComponentProps {
  columns: ColumnsType<TenantDataType>;
  data: TenantDataType[];
  tableParams: TableParams;
  handleTableChange: any;
  loading: boolean;
}

export default function TableComponent(props: ITableComponentProps) {
  return (
    <Table
      columns={props.columns}
      rowKey={(record) => record.id}
      dataSource={props.data}
      pagination={{
        ...props.tableParams.pagination,
        showSizeChanger: true,
        position: ["bottomCenter" as TablePaginationPosition],
      }}
      loading={props.loading}
      onChange={props.handleTableChange}
    />
  );
}
