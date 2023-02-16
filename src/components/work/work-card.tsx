import { Work } from "@/src/models";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";

export interface IWorkCardProps {
  work: Work;
}

export function WorkCard({ work }: IWorkCardProps) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <Box width={{ xs: "100%", sm: "246px" }} flexShrink={0}>
        <Image src={work.thumbnailUrl} width={246} height={150} alt="work" />
      </Box>
      <Box>
        <Typography variant={"h4"} fontWeight={"bold"}>
          {work.title}
        </Typography>
        <Stack direction={"row"} alignItems={"center "} my={2}>
          <Chip color={"secondary"} label={work.createdAt} size={"small"} />
          <Typography ml={3} color={"GrayText"}>
            {work.tagList.join(", ")}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
