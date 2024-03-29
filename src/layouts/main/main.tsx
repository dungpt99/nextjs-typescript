import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Footer, Header } from "../components";

export interface IMainLayoutProps {
  children: any;
}

export default function MainLayout(props: IMainLayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component={"main"} flexGrow="1">
        <Container maxWidth="sm" sx={{ bgcolor: "red" }}></Container>
        <Container maxWidth="md">{props.children}</Container>
      </Box>
      <Footer />
    </Stack>
  );
}
