import * as React from "react";
import StudentDetail from "../components/Swr/StudentDetail";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Box>
      <Typography
        component={"h1"}
        variant={"h3"}
        color={"primary.main"}
        sx={{ border: "1px solid" }}
      >
        About Playground
      </Typography>
      <h1>About Playground</h1>
      <Link href={"/swr"}>Change</Link>
    </Box>
  );
}
