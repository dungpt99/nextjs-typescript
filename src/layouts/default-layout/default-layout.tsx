import * as React from "react";

import Header from "../components/header";
import Sidebar from "../components/sidebar";

export interface IDefaultLayoutProps {
  children: React.ReactElement;
}

export default function DefaultLayout(props: IDefaultLayoutProps) {
  return (
    <div>
      <Header />
      <Sidebar />
      {props.children}
    </div>
  );
}
