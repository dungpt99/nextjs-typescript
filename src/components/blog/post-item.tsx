import { Post } from "@/src/models";
import { Box, Divider, Stack, Typography } from "@mui/material";
import * as React from "react";

export interface IPostItemProps {
  post: Post;
}

export function PostItem({ post }: IPostItemProps) {
  return (
    <Box>
      <Typography variant={"h3"} fontWeight={"bold"}>
        {post.title}
      </Typography>
      <Stack direction={"row"} my={2}>
        <Typography variant={"body1"} sx={{ display: "flex" }}>
          {post.publishedDate}
        </Typography>

        <Divider orientation={"vertical"} sx={{ mx: 2 }} flexItem />

        <Typography variant={"body1"} sx={{ display: "flex" }}>
          {post.tagList.join(", ")}
        </Typography>
      </Stack>
      <Typography variant={"body2"}>{post.description}</Typography>
    </Box>
  );
}
