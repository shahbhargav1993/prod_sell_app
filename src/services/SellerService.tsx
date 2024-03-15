import { Seller } from "../model/Seller";

const apiBaseURL:string = "http://localhost:9001/"
export function getAllSellerAPI(){
    return fetch(apiBaseURL+"sellers",{
        method:"GET",
        mode:"cors"
    });
}
export async function postSomeSeller(sellerData: {  sellerID: string ,sellerName: string;}){
        try{
           const response = await fetch (apiBaseURL+"sellers",
           {
            method:"POST",
            mode:"cors",
            headers:{"Content-Type":"application/json"},
            body:
                JSON.stringify(sellerData)
        })
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred while adding the seller');
          }
          return {}; 
        } catch (error) {
            throw error; 
            }
};

export function deleteSellerAPI(sellerId:string) {
    return fetch(apiBaseURL + "sellers/" + sellerId,
    { method: 'DELETE',
    headers: {'Content-Type':'application/json'},
    mode:"cors",
    });
};
