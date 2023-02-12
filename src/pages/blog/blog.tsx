import * as React from "react";

import MainLayout from "../../layouts/main";

export interface IBlogPageProps {}

export default function BlogPage(props: IBlogPageProps) {
  return <div>Blogs page</div>;
}

BlogPage.getLayout = function getLayout(blog: React.ReactElement) {
  return <MainLayout>{blog}</MainLayout>;
};
