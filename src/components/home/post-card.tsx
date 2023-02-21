import { Card, CardContent, Typography, Divider, Stack } from "@mui/material";
import * as React from "react";
import { Post } from "../../models";
import { PostItem } from "../blog";

export interface IPostCardProps {
  post: Post;
}

export function PostCard({ post }: IPostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  );
}
