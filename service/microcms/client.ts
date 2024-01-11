
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
      queries
    })

    return blogs.contents;
  }catch(e) {
    console.error(e)
    return [];
  }
}

export async function getBlog({id}: {id: string}): Promise<Blog | null> {
  try {
    const data = await client.get({
      endpoint: "blogs",
      contentId: id
    })
    return data.data;
  }catch(e) {
    console.error(e)
    return null;
  }

}