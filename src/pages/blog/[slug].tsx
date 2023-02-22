import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { getPostList } from "@/src/utils";
import MainLayout from "@/src/layouts/main";
import { Post } from "@/src/models";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify/lib";
import { Box, Container, Divider } from "@mui/material";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkPrism from "remark-prism";

export interface IBlogPageDetailProps {
  post: Post;
}

export default function BlogPageDetail({ post }: IBlogPageDetailProps) {
  if (!post) return null;

  return (
    <Box>
      <Container>
        <h1>Blog detail</h1>
        <p>{post.title}</p>
        <p>{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || " " }}></div>
      </Container>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();
  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IBlogPageDetailProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };
  const post = postList.find((x) => x.slug === slug);
  if (!post) return { notFound: true };

  //convert to html
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc)
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeDocument, { title: "Blog detail page" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || "");
  post.htmlContent = file.toString();
  return {
    props: {
      post,
    },
  };
};

BlogPageDetail.getLayout = function getLayout(blog: React.ReactElement) {
  return <MainLayout>{blog}</MainLayout>;
};
