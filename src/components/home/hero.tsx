import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import * as React from "react";

import avatar from "../../assets/images/avatar.jpg";

export interface IHeroSectionProps {}

export function HeroSection(props: IHeroSectionProps) {
  return (
    <Box component={"section"} pt={18} pb={9}>
      <Container>
        <Stack direction={"row"} alignItems={"flex-start"}>
          <Box>
            <Typography component={"h1"} variant={"h3"} fontWeight={"bold"} mb={5}>
              Hi, I am John, <br /> Creative Technologist
            </Typography>

            <Typography mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>

            <Button variant={"contained"}>Download resume</Button>
          </Box>
          <Box minWidth={"240px"}>
            <Image src={avatar} alt={"Avatar"} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
