import { Box, Container, Stack, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { Post } from "../../models";
import { PostCard } from "./post-card";
import { Work } from "@/src/models";
import { WorkList } from "../work";

export interface IFeaturedWorkProps {}

export function FeaturedWork(props: IFeaturedWorkProps) {
  const workList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboards",
      createdAt: "1676446435005",
      updatedAt: "1676446435005",
      tagList: ["Dashboard"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl: "",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      createdAt: "1676446435005",
      updatedAt: "1676446435005",
      tagList: ["Illustration"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl: "",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      createdAt: "1676446435005",
      updatedAt: "1676446435005",
      tagList: ["Typography"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl: "",
    },
  ];
  return (
    <Box component={"section"} pt={2} pb={4}>
      <Container>
        <Typography variant={"h5"} mb={3}>
          Featured works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
