import React, { useState } from "react";
import classNames from "classnames/bind";
import { Box } from "@mui/material";

import styles from "./header.module.scss";

const cx = classNames.bind(styles);

export function Header() {
  return (
    <Box component="header" py={2} textAlign="center">
      Header
    </Box>
  );
}
