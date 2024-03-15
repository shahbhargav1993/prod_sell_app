import React from "react";
import { getAllSellerAPI} from "../services/SellerService";

export function SellerPage() {
  function getSellers() {
    getAllSellerAPI()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }
  // function postSeller(){
  //     postSomeSeller()
  //     .then(response => {return response.json()})
  //     .then(json => {console.log(json)})
  //     .catch(error => {console.log(error)})
  // }
  return (
    <>
      <div>
        <button onClick={getSellers}>Test all sellers</button>
      </div>
    </>
  );
}