import React from "react";
import classNames from "classnames/bind";
import { Box, Icon, Stack, Typography } from "@mui/material";

import styles from "./header.module.scss";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const cx = classNames.bind(styles);

export function Footer() {
  const socialLink = [
    { icon: Facebook, url: "" },
    { icon: Instagram, url: "" },
    { icon: Twitter, url: "" },
    { icon: LinkedIn, url: "" },
  ];
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction={"row"} justifyContent={"center"}>
        {socialLink.map((item, index) => (
          <Box
            key={index}
            component="a"
            p={2}
            href={item.url}
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <Icon component={item.icon} sx={{ fontSize: "48px" }} />
          </Box>
        ))}
      </Stack>

      <Typography>Copyright</Typography>
    </Box>
  );
}
