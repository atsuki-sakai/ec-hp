

type Category = {
    id: string
    createdAt: string
    upstringdAt: string
    publishedAt: string
    revisedAt: string
    name: string
}
export type Blog = {
    id: string
    createdAt: string
    upstringdAt: string
    revisedAt: string
    title: string
    content: string
    eyecatch: {
        url: string,
        height: number,
        width: number
    }
    category: Category
}

export type News = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    content: string
}