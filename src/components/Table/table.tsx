import React, { useState } from "react";
import { Table } from "antd";
import type { TablePaginationConfig } from "antd/es/table";
import type { FilterValue } from "antd/es/table/interface";
export interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}

type TablePaginationPosition = "bottomCenter";
export interface ITableComponentProps {
  columns: any;
  dataSource: any;
  tableParams: TableParams;
  handleTableChange: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: any
  ) => void;
  loading: boolean;
  rowSelection?: object;
}

export default function TableComponent(props: ITableComponentProps) {
  const { tableParams, ...attribute } = props;
  return (
    <Table
      rowKey={(record) => record.id}
      pagination={{
        ...tableParams.pagination,
        showSizeChanger: false,
        position: ["bottomCenter" as TablePaginationPosition],
        showTotal: (total) => (
          <span style={{ right: 0, position: "absolute" }}>Total {total} transactions</span>
        ),
      }}
      onChange={props.handleTableChange}
      {...attribute}
    />
  );
}
