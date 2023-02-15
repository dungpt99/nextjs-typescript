import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import * as React from "react";

import avatar from "../../assets/images/avatar.png";

export interface IHeroSectionProps {}

export function HeroSection(props: IHeroSectionProps) {
  return (
    <Box component={"section"} pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Box>
            <Typography component={"h1"} variant={"h3"} fontWeight={"bold"} mb={{ xs: 3.5, md: 5 }}>
              Hi, I am John, <br /> Creative Technologist
            </Typography>

            <Typography mb={{ xs: 3.5, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>

            <Button variant={"contained"} size={"large"}>
              Download resume
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: "240px",
              height: "240px",
              boxShadow: "-5px 10px",
              color: "secondary.light",
              borderRadius: "50%",
            }}
          >
            <Image src={avatar} alt={"Avatar"} height={240} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
