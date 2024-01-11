import { getBlogList } from "@/service/microcms/client";
import type { Blog } from "@/service/microcms/type";
import { getStaticPaths } from "next/dist/build/templates/pages";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { truncateHTMLString } from "@/lib/utils";

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
    <div className="mx-4 my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog: Blog) => {
          console.log(blog.category.name);
          return (
            <div key={blog.id} className="mb-5">
              <Link href={`/blog/${blog.id}`}>
                <Image
                  src={blog.eyecatch.url}
                  width={blog.eyecatch.width}
                  height={blog.eyecatch.height}
                  alt={blog.title}
                  className="rounded-md shadow-sm mb-2"
                />
                <div className="flex justify-between items-center my-3">
                  <span className="text-xs bg-yellow-50 text-yellow-500 tracking-wider px-3 py-0.5 rounded-sm">
                    {blog.category.name}
                  </span>
                  <span className="text-xs text-gray-500 font-light">
                    公開日: {blog.createdAt.split("T")[0]}
                  </span>
                </div>
                <h5 className="text-base tracking-wide mb-3">{blog.title}</h5>
                <p className="text-sm text-gray-500">
                  {truncateHTMLString(blog.content, 80)}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPageIndex;
