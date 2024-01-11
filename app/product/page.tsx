import React from "react";
import Image from "next/image";
import Link from "next/link";

import { fetchProducts } from "@/service/stripe/checkout";
import { Button } from "@/components/ui/button";
import { formatNumberWithDots } from "@/lib/utils";

const paymentLinks = [
  "https://buy.stripe.com/test_8wM3e31Z1do47yEeUX",
  "https://buy.stripe.com/test_3cs29ZeLNfwcf16aEG",
  "https://buy.stripe.com/test_14k29Z1Z14Ry7yE3cd",
  "https://buy.stripe.com/test_3cs6qf8npck02ekaEE",
];

export async function Product() {
  const products = await fetchProducts();
  console.log("products: ", products);

  return (
    <div className="mx-4 my-20">
      <h3 className="w-full text-lg tracking-wider font-bold">全ての商品</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {products.map((product: Product, index: number) => {
          return (
            <div
              key={product.id}
              className="block w-[300px] h-auto my-3 mx-auto"
            >
              <Image
                src={product.images[0]}
                width={300}
                height={300}
                alt={product.name}
                className="rounded-md shadow-md mb-3"
              />
              <p className="font-bold text-xl tracking-wider">{product.name}</p>
              <p className="bg-green-100 w-fit px-2 py-0.5 my-1 text-green-800 rounded-sm tracking-wider">
                ¥ {formatNumberWithDots(product.prices[0].unit_amount)}
              </p>
              <span className="text-gray-500 text-xs">
                {product.description}
              </span>
              <div className="flex justify-center items-center my-5">
                <Link href={paymentLinks[index]} className="block w-full">
                  <Button className="w-full" variant={"secondary"}>
                    購入する
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;

