import React, { useState } from "react";
import classNames from "classnames/bind";
import { Box } from "@mui/material";

import styles from "./header.module.scss";
import { HeaderMobile } from "./header-mobile";
import { HeaderDesktop } from "./header-desktop";

const cx = classNames.bind(styles);

export function Header() {
  return (
    <Box component="header" py={2} textAlign="center">
      <HeaderMobile />
      <HeaderDesktop />
    </Box>
  );
}
