import React from "react";
import { getNews } from "@/service/microcms/client";
import { notFound } from "next/navigation";

const NewsSlug = async ({ params }: { params: { slug: string } }) => {
  const news = await getNews(params.slug);
  console.log(news);
  if (!news) {
    return notFound();
  }
  return (
    <div className="mx-4 my-20">
      <div className="w-full max-w-[650px] mx-auto">
        <div className="flex justify-between items-center my-3">
          <h1 className="text-lg font-semibold tracking-wide mb-3 text-center">
            {news.title}
          </h1>
          <span className="text-xs text-gray-500 font-light">
            公開日: {news.createdAt.split("T")[0]}
          </span>
        </div>
        <p
          className="text-base leading-6 text-gray-500"
          dangerouslySetInnerHTML={{ __html: news.content }}
        ></p>
      </div>
    </div>
  );
};

export default NewsSlug;
