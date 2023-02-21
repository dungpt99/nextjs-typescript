import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";

import { getPostList } from "@/src/utils";
import MainLayout from "@/src/layouts/main";
import { Post } from "@/src/models";
import { Box, Container, Divider } from "@mui/material";
import Link from "next/link";
import { PostItem } from "@/src/components/blog";

export interface IBlogPageProps {
  posts: Post[];
}

export default function BlogPage({ posts }: IBlogPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>
        <Box component={"ul"} sx={{ listStyleType: "none", p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`blog/${post.slug}`} legacyBehavior>
                <a>
                  <PostItem post={post} />
                </a>
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export const getStaticProps: GetStaticProps<IBlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  return {
    props: {
      posts: postList,
    },
  };
};

BlogPage.getLayout = function getLayout(blog: React.ReactElement) {
  return <MainLayout>{blog}</MainLayout>;
};
