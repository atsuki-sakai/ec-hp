import { PUBLIC_DOMAIN } from "@/lib/utils";

export async function fetchProducts() {
    const response = await fetch(PUBLIC_DOMAIN + "/api/products", {
        method: "GET"
    })

    if(response.ok){
        const data = response.json();
        return data;
    }

    
    return [];
}