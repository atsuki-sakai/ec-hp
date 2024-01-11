
type Price = {
    id: string,
    currency: string,
    transform_quantity: string,
    unit_amount: string
}

type Product = {
    id: string,
    name: string,
    description: string,
    images: string[],
    unit_label: string,
    prices: Price[]

}