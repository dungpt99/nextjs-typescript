import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { TenantDataType } from "../../common/interface/tenant.model";
import { AdminDataType } from "../../common/interface/admin.model";
export interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}

type TablePaginationPosition = "bottomCenter";
export interface ITableComponentProps {
  columns: any;
  data: any;
  tableParams: TableParams;
  handleTableChange: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: any
  ) => void;
  loading: boolean;
}

export default function TableComponent(props: ITableComponentProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <Table
      rowSelection={rowSelection}
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
