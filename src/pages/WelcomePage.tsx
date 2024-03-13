import React from 'react';
import { Link } from 'react-router-dom';

export function WelcomePage(){
    return (
        <div className = "Welcome container">
          <h1 style={{ textAlign: 'center'}}>Welcome to Product Seller App</h1>  
            <nav className="nav-links">
                <Link to="/add-product">Add Product</Link>
                <Link to="/add-seller">Add Seller</Link>
            </nav>
        </div>

    )
}