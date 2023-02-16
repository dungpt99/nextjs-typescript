import { Card, CardContent, Typography, Divider, Stack } from "@mui/material";
import * as React from "react";
import { Post } from "../../models";

export interface IPostCardProps {
  post: Post;
}

export function PostCard({ post }: IPostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
