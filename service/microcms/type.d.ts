

type Category = {
    id: string
    created_at: Date
    updated_at: Date
    published_at: Date
    revised_at: Date
    name: string
}
export type Blog = {
    id: string
    created_at: Date
    updated_at: Date
    revised_at: Date
    title: string
    content: string
    eyecatch: {
        url: string,
        height: number,
        width: number
    }
    category: Category[]
}