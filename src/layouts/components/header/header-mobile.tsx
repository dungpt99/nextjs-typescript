import { Box } from "@mui/material";
import * as React from "react";

export interface IHeaderMobileProps {}

export function HeaderMobile(props: IHeaderMobileProps) {
  return <Box display={{ xs: "block", md: "none" }}>Header mobile</Box>;
}
