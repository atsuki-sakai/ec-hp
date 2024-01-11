import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET!,{
    apiVersion: '2023-10-16',
    maxNetworkRetries: 3,
});

export async function GET(req: Request): Promise<any> {
    if(req.method.toUpperCase() !== "GET"){
        return NextResponse.json({error: "method is only get."}, {status: 405});
    }
    const products = await stripe.products.list();
    if (!products.data || products.data.length < 1) { 
        return NextResponse.json([], {status: 200});
    };

    const response = await Promise.all(products.data.map(async (product, i) => {
        const prices = await stripe.prices.list({
            product: product.id
        });
        return {
            id: product.id,
            description: product.description,
            name: product.name,
            images: product.images,
            unit_label: product.unit_label,
            prices: prices.data.map((price) => {
                return {
                    id: price.id,
                    currency: price.currency,
                    transform_quantity: price.transform_quantity,
                    unit_amount: price.unit_amount
                }
            })
        }
    }));
    return NextResponse.json(response, {status: 200});
}