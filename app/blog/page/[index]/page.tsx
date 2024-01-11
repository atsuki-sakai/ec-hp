import { getBlogList } from "@/service/microcms/client";
import { getStaticPaths } from "next/dist/build/templates/pages";
import React from "react";

const BlogPageIndex = async ({
  params: { index },
}: {
  params: { index: string };
}) => {
  const blogs = await getBlogList();

  if (blogs.length === 0) {
    return <div>not fined blogs...</div>;
  }
  return (
    <div>
      {blogs.map((blog: any) => {
        return <div key={blog.id}>{blog.title}</div>;
      })}
    </div>
  );
};

export default BlogPageIndex;
