import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ColumnsType, FilterValue, SorterResult } from "antd/es/table/interface";
import classNames from "classnames/bind";
import { Card } from "antd";
import Image from "next/image";

import styles from "./admin.module.scss";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import toastNotify from "../../../components/Toast/toast";
import Text from "../../../components/Text";
import Warning from "../../../assets/images/warning.svg";
import { DefaultLayout } from "../../../layouts";
import { AdminDataType } from "../../../common/interface/admin.model";
import { TypeToast } from "../../../common/enum";
import { TablePaginationConfig } from "antd";
import { TableParams } from "../../../components/Table/table";
import { createAdmin, deleteAdmin, getAllAdmin } from "../../../services/user";
import Result from "../../../components/Modal/result";
import Confirm from "../../../components/Modal/confirm";

const cx = classNames.bind(styles);

export default function Admin() {
  const address = useRef({ value: "" });
  const createTime = useRef({ value: "" });
  const privateKey = useRef({ value: "" });
  const [data, setData] = useState<AdminDataType[]>([]);
  const [adminId, setAdminId] = useState("");
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columnsAdmin: ColumnsType<AdminDataType> = [
    {
      title: "Admin ID",
      dataIndex: "id",
      key: "adminId",
      render: (id: string) => <a>{`Admin${id}`}</a>,
      sortDirections: ["descend"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Create time",
      dataIndex: "created_at",
      key: "create time",
      render: (createTime: Date) => <div>{new Date(createTime).toLocaleString("ja-JP")}</div>,
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div className={cx("table__action")}>
          <div className={cx("table__icon")}>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                setWarningText("Do you want delete admin's account?");
                setAction("Delete");
                setIsConfirmOpen(true);
                setAdminId(record.id);
              }}
            />
          </div>
        </div>
      ),
    },
  ];
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [warningText, setWarningText] = useState("");
  const [action, setAction] = useState("");

  useEffect(() => {
    listAdmin();
  }, []);

  const handleAddButton = async () => {
    setWarningText("Do you want create admin's account?");
    setAction("Create");
    setIsConfirmOpen(true);
  };

  const handleOkResult = () => {
    setIsResultOpen(false);
  };

  const handleCancelResult = () => {
    setIsResultOpen(false);
  };

  const handleOkConfirm = async () => {
    if (warningText === "Do you want create admin's account?") {
      const result = await addAdmin();
      address.current.value = result.data.address;
      createTime.current.value = result.data.created_at;
      privateKey.current.value = result.data.private_key;
      setIsConfirmOpen(false);
      setIsResultOpen(true);
    } else {
      await removeAdmin(adminId);
      setIsConfirmOpen(false);
    }
  };

  const handleCancelConfirm = () => {
    setIsConfirmOpen(false);
  };

  const handleTableChange = async (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<AdminDataType> | SorterResult<AdminDataType>[]
  ) => {
    try {
      setLoading(true);
      const result = await getAllAdmin({
        page: pagination.current,
        pageSize: pagination.pageSize,
      });

      setData(result.data);
      setLoading(false);
      setTableParams({
        pagination: {
          current: result.pagination.currentPage,
          pageSize: result.pagination.pageSize,
          total: result.pagination.totalCount,
        },
        filters,
        ...sorter,
      });
    } catch (error) {
      toastNotify(TypeToast.ERROR, (error as Error).message);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(privateKey.current?.value);
  };

  const addAdmin = async () => {
    const result = await createAdmin();
    setData([result.data, ...data]);
    return result;
  };

  const removeAdmin = async (id: string) => {
    try {
      const result = data.filter((e: AdminDataType) => {
        return e.id !== id;
      });
      await deleteAdmin(id);
      setData(result);
    } catch (error) {
      toastNotify(TypeToast.ERROR, (error as Error).message);
    }
  };

  const listAdmin = async () => {
    try {
      setLoading(true);
      const result = await getAllAdmin({
        page: tableParams.pagination?.current,
        pageSize: tableParams.pagination?.pageSize,
      });
      setData(result.data);
      setLoading(false);
      setTableParams({
        pagination: {
          current: result.pagination.currentPage,
          pageSize: result.pagination.pageSize,
          total: result.pagination.totalCount,
        },
      });
    } catch (error) {
      toastNotify(TypeToast.ERROR, (error as Error).message);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("action")}>
        <div className={cx("button")}>
          <Button className={cx("button__add")} btnAdd handleOnClick={handleAddButton}>
            Add
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
          dataSource={data}
          tableParams={tableParams}
          handleTableChange={handleTableChange}
          loading={loading}
        />
      </div>
      <Result
        title={<Text className={cx("modal__title")}>Add new admin</Text>}
        isModalOpen={isResultOpen}
        handleOk={handleOkResult}
        handleCancel={handleCancelResult}
        style={{
          borderRadius: "8px",
          width: "25%",
        }}
      >
        <div className={cx("modal__body")}>
          <Card style={{ width: "100%", margin: "10px 0" }} size={"small"}>
            <div className={cx("card__title")}>
              <Image src={Warning} width={25} height={24} alt={"Warning"} />
              <p>Warning</p>
            </div>
            <p>Private key is only displayed once!</p>
            <p>Please copy private key.</p>
          </Card>
          <Input
            type="text"
            label="Address:"
            defaultValue="0x9F75A65d05Bf2...51233d553FD57C8"
            inputRef={address}
            classinput={cx("modal__input")}
            classlabel={cx("modal__label")}
            display={"row"}
            disabled
          />
          <Input
            type="text"
            label="Create time:"
            defaultValue="2022-11-07 13:41:31"
            inputRef={createTime}
            classinput={cx("modal__input")}
            classlabel={cx("modal__label")}
            display={"row"}
            disabled
          />
          <Input
            type="text"
            label="Private key:"
            defaultValue="0x9F75A65d05Bf2...51233d553FD57C8"
            inputRef={privateKey}
            classinput={cx("modal__input")}
            classlabel={cx("modal__label")}
            display={"row"}
            disabled
          />
          <div className={cx("modal__button")}>
            <Button className={cx("button__element")} handleOnClick={handleCopyText}>
              Copy private key
            </Button>
          </div>
        </div>
      </Result>
      <Confirm
        warningText={warningText}
        action={action}
        isModalOpen={isConfirmOpen}
        handleOk={handleOkConfirm}
        handleCancel={handleCancelConfirm}
      ></Confirm>
    </div>
  );
}

Admin.getLayout = function getLayout(admin: React.ReactElement) {
  return <DefaultLayout>{admin}</DefaultLayout>;
};
