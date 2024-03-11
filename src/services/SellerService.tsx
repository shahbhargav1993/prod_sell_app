const apiBaseURL = "http://localhost:9001/"
export function getAllSellerAPI(){
    return fetch(apiBaseURL+"sellers",{
        method:"GET",
        mode:"cors"
    });
}
export function postSomeSeller(){
    return fetch(apiBaseURL+"seller",{
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({sellerName:"", sellerID:1})
    })
}