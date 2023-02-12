import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Footer, Header } from "../components";
import Link from "next/link";

export interface IMainLayoutProps {
  children: any;
}

export default function MainLayout(props: IMainLayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component={"main"} flexGrow="1">
        <Container maxWidth="sm" sx={{ bgcolor: "primary.main" }}>
          SM container
        </Container>
        <Container maxWidth="md" sx={{ bgcolor: "primary.main" }}>
          MD container
        </Container>
        <Container sx={{ bgcolor: "primary.main" }}></Container>
        <Link href={"/"} legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href={"/blog"} legacyBehavior>
          <a>Blog</a>
        </Link>
        <Link href={"/works"} legacyBehavior>
          <a>Works</a>
        </Link>
        {props.children}
      </Box>
      <Footer />
    </Stack>
  );
}
