import * as React from "react";
import StudentDetail from "../components/Swr/StudentDetail";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function SWRPage() {
  return (
    <Box>
      <Typography component={"h1"} variant={"h3"} color={"primary.main"}>
        SWR Playground
      </Typography>
      <h1>SWR Playground</h1>
      {/* <ul>
        <li>
          <StudentDetail studentId="lea2aa9l7x3a5v0" />
        </li>
        <li>
          <StudentDetail studentId="lea2aa9l7x3a5v0" />
        </li>
        <li>
          <StudentDetail studentId="lea2aa9l7x3a5v0" />
        </li>
      </ul> */}
      <Link href={"/about"}>Change</Link>
    </Box>
  );
}
