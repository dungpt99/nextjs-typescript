import * as React from "react";

import MainLayout from "../../layouts/main";

export interface IWorkPageProps {}

export default function WorkPage(props: IWorkPageProps) {
  return <div>Works page</div>;
}

WorkPage.getLayout = function getLayout(work: React.ReactElement) {
  return <MainLayout>{work}</MainLayout>;
};
