import { truncateHTMLString } from "@/lib/utils";
import { getNewsList } from "@/service/microcms/client";
import { News } from "@/service/microcms/type";
import React from "react";
import Image from "next/image";
import Link from "next/link";

async function NewsPageIndex({
  params: { index },
}: {
  params: { index: string };
}) {
  const newsList = await getNewsList();
  console.log(newsList);
  return (
    <div>
      <div className="w-full">
        <Image
          src="https://picsum.photos/seed/picsum/2200/2200"
          width={2200}
          height={2200}
          alt="contact page background image"
          className="object-fill w-full h-auto max-h-[180px] md:max-h-[320px] rounded-md"
        />
      </div>
      <div className="mx-4 my-12">
        <h1 className="font-bold text-lg tracking-widest mb-3">
          News / お知らせ
        </h1>
        {newsList.map((news: News) => {
          return (
            <div
              key={news.id}
              className="py-2 px-3 bg-gray-50 mb-5  rounded-md shadow-sm"
            >
              <Link href={`/news/${news.id}`}>
                <div className="flex justify-between items-center">
                  <h5 className="text-base font-semibold tracking-wider">
                    {news.title}
                  </h5>
                  <span className="text-xs font-light text-gray-500">
                    公開日: {news.createdAt.split("T")[0]}
                  </span>
                </div>
                <p className="text-sm tracking-wide text-slate-800">
                  {truncateHTMLString(news.content, 50)}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsPageIndex;
