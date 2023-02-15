import { Card, CardContent, Typography, Divider } from "@mui/material";
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
        <Typography variant={"body1"} my={2} sx={{ display: "flex" }}>
          {post.publishedDate}

          <Divider orientation={"vertical"} sx={{ mx: 2 }} flexItem />

          {post.tagList.join(", ")}
        </Typography>
        <Typography variant={"body2"}>{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
