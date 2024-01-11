import React from "react";
import Image from "next/image";
import { getBlog } from "@/service/microcms/client";
import { notFound } from "next/navigation";
import { truncateHTMLString } from "@/lib/utils";

const Blog = async ({ params }: { params: { slug: string } }) => {
  const query = { contentId: "1" };
  const blog = await getBlog(params.slug);
  console.log(blog);
  if (!blog) {
    return notFound();
  }
  return (
    <div className="mx-4 my-20">
      <div className="w-full max-w-[650px] mx-auto">
        <Image
          src={blog.eyecatch.url}
          width={blog.eyecatch.width}
          height={blog.eyecatch.height}
          alt={blog.title}
          className="rounded-md shadow-sm"
        />
        <div className="flex justify-between items-center my-3">
          <span className="text-xs bg-yellow-50 text-yellow-500 tracking-wider px-3 py-0.5 rounded-sm">
            {blog.category.name}
          </span>
          <span className="text-xs text-gray-500 font-light">
            公開日: {blog.createdAt.split("T")[0]}
          </span>
        </div>
        <h1 className="text-lg font-semibold tracking-wide mb-3 text-center">
          {blog.title}
        </h1>

        <p
          className="text-base leading-6 text-gray-500"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></p>
      </div>
    </div>
  );
};

export default Blog;
