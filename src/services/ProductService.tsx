import { Product } from "../model/Product";

const apiBaseURL = "http://localhost:9001/"
export function getAllProductAPI(){
    return fetch(apiBaseURL+"products",{
        method:"GET",
        mode:"cors"
    });
}

export async function postSomeProduct(productData: { productID:string; productName: string; price: number; sellerName: string }){
    //return fetch(apiBaseURL+"products",{
    try{
        const response = await fetch (apiBaseURL+"products",{
            method:"POST",
            mode:"cors",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({...productData})
        })
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred while adding the product');
        }
        return {}; 
    } catch (error) {
        throw error; 
    }
}

export function deleteProductAPI(productId:string) {
    return fetch(apiBaseURL + "products/" + productId,
    { method: 'DELETE',
    headers: {'Content-Type':'application/json'},
    mode:"cors"
    });
};
