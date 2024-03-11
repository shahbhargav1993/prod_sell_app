import React from "react";
import {getAllProductAPI } from "../services/ProductService";

export function ProductPage() {
  function getProducts() {
    getAllProductAPI()
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
        <button onClick={getProducts}> Test all products</button>
      </div>
    </>
  );
}
