import { Box, Container, Stack, Link as MuiLink } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import { ROUTE_LIST } from "./routes";

export interface IHeaderDesktopProps {}

export function HeaderDesktop(props: IHeaderDesktopProps) {
  const router = useRouter();
  return (
    <Box display={{ xs: "none", md: "block" }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref legacyBehavior>
              <MuiLink sx={{ ml: 2 }} className={clsx({ active: router.pathname === route.path })}>
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
