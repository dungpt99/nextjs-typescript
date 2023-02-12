import React from "react";
import classNames from "classnames/bind";
import { Box } from "@mui/material";

import styles from "./header.module.scss";

const cx = classNames.bind(styles);

export function Footer() {
  return (
    <Box component="footer" py={2} textAlign="center">
      Footer
    </Box>
  );
}
