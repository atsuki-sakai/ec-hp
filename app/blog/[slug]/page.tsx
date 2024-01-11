import React from "react";
import { getBlogList } from "@/service/microcms/client";

const Blog = async ({ params }: { params: { slug: string } }) => {
  const query = { contentId: "1" };
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

export default Blog;
