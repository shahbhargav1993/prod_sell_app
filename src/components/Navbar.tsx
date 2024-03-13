import React from "react";
import { Link } from "react-router-dom";

export function NavigationFunction() {
  return (
    <>
      <ul className="Navbar">Check Out These Links</ul>
      <li>
        <Link to="/products/add">Add Product</Link>
      </li>
      <li>
        <Link to="/sellers/add">Add Seller</Link>
      </li>
    </>
  );
}
