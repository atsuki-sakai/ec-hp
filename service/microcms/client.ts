
import { createClient , MicroCMSQueries} from 'microcms-js-sdk';
import type { Blog } from "./type"


export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!,
  apiKey:  process.env.NEXT_PUBLIC_MICROCMS_APIKEY!,
});


export async function getBlogList(queries?: MicroCMSQueries): Promise<Array<Blog> | []>{
  try{
    const blogs = await client.get({
      endpoint: "blogs",
      queries: queries ? queries : {
        orders: "-publishedAt"
      }
    })

    return blogs.contents;
  }catch(e) {
    console.error(e)
    return [];
  }
}

export async function getBlog(id: string): Promise<Blog | null> {
  try {
    const data = await client.get({
      endpoint: "blogs",
      contentId: id
    })
    return data;
  }catch(e) {
    console.error(e)
    return null;
  }

}


export async function getNewsList(queries?: MicroCMSQueries): Promise<Array<any> | []>{
  try{
    const newslist = await client.get({
      endpoint: "news",
      queries: queries ? queries : {
        orders: "-publishedAt"
      }
    })

    return newslist.contents;
  }catch(e) {
    console.error(e)
    return [];
  }
}

export async function getNews(id: string): Promise<any | null> {
  try {
    const data = await client.get({
      endpoint: "news",
      contentId: id
    })
    return data;
  }catch(e) {
    console.error(e)
    return null;
  }

}