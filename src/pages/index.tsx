import Head from "next/head";

import { Box } from "@mui/material";
import MainLayout from "../layouts/main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <Box>Home page</Box>;
}

Home.getLayout = function getLayout(home: React.ReactElement) {
  return <MainLayout>{home}</MainLayout>;
};
