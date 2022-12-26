import React from "react";
import classNames from "classnames/bind";
import { Col, Row } from "antd";
import type { SelectProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from "./tenantDetail.module.scss";
import { DefaultLayout } from "../../../../layouts";
import Input from "../../../../components/Input";
import Text from "../../../../components/Text";
import Peer from "../../../../components/Peer";
import SelectComponent from "../../../../components/Select/select";

const cx = classNames.bind(styles);

const inputList = [
  { label: "Tenant ID", type: "text", value: "tenant id" },
  { label: "Tenant Code", type: "text", value: "tenant code" },
  { label: "Chaincode", type: "text", value: "chain code" },
  { label: "Tenant name", type: "text", value: "tenant name" },
  { label: "Number of users", type: "text", value: "number of user" },
  { label: "Tenant balance", type: "text", value: "tenant balance" },
  { label: "Tenant Status", type: "text", value: "tenant status" },
  { label: "Total amount in user's wallet", type: "text", value: "total amount" },
  { label: "Number of peer", type: "text", value: "number of peer" },
];

const walletList = [
  { label: "Status", type: "text", value: "Status", offset: "4", comp: "select" },
  { label: "Amount", type: "text", value: "amount", offset: "2", comp: "" },
  { label: "Hash", type: "text", value: "hash", offset: "4", comp: "" },
  { label: "From", type: "text", value: "from", offset: "2", comp: "" },
  { label: "Time", type: "text", value: "time", offset: "4", comp: "" },
  { label: "To", type: "text", value: "to", offset: "2", comp: "" },
];

const options: SelectProps["options"] = [
  { value: "finished", label: "Finished" },
  { value: "processing", label: "Processing" },
];

export default function TenantDetail() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (value: string) => {};
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <div className={cx("title__text")}>Tenant Information</div>
        <div className={cx("title__action")}>
          <div className={cx("title__icon")}>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div className={cx("title__icon")}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
      <div className={cx("filter")}>
        <Row gutter={[8, 16]}>
          {inputList.map((element, index) => (
            <Col span={12} key={index}>
              <Input
                type={element.type}
                label={element.label}
                disabled
                value={element.value}
                display={"column"}
              />
            </Col>
          ))}
        </Row>
      </div>
      <div className={cx("peer")}>
        <Text>Peer</Text>
        <div className={cx("peer_lists")}>
          <Row gutter={[8, 16]}>
            <Col span={4}>
              <Peer />
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx("wallet")}>
        <Text>Tenant wallet</Text>
        <div className={cx("wallet__box")}>
          <div className={cx("wallet__input")}>
            <Row gutter={[8, 16]}>
              {walletList.map((element, index) => (
                <Col span={6} key={index} offset={element.offset}>
                  {(element.comp === "select" && (
                    <SelectComponent
                      options={options}
                      handleChange={handleChange}
                      label={element.label}
                      display={"row"}
                    />
                  )) || (
                    <Input
                      type={element.type}
                      label={element.label}
                      value={element.value}
                      onChangeValue={onChange}
                      display={"row"}
                    />
                  )}
                </Col>
              ))}
            </Row>
          </div>
          <div className={cx("wallet__table")}></div>
        </div>
      </div>
    </div>
  );
}

TenantDetail.getLayout = function getLayout(tenant: React.ReactElement) {
  return <DefaultLayout>{tenant}</DefaultLayout>;
};
