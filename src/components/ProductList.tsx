import React, { useEffect, useState } from 'react';
import { getAllProductAPI } from '../services/ProductService';
import { DeleteProduct } from './DeleteProduct';
import { Product, ProductReturned } from '../model/Product';
import { Link } from 'react-router-dom';

export const ProductList: React.FC = () => {
    const [products, setProducts] = useState<ProductReturned[]>([]);
        useEffect(() => {
        fetchProducts();
        }, []);
    const fetchProducts = async () => {
    const response = await getAllProductAPI();
    const data = await response.json();
    console.log(data);
        setProducts(data);
    };
    const handleDelete = (productId: string) => {
        setProducts(products.filter(product => product.productID !== productId));
        fetchProducts(); // Refresh the list after deletion
}   ;
return (
    <div>
        <h2>Product List</h2>
        <Link to="/add-product">Add Product</Link>

         <table className='mytable'>
                <thead>
                    <tr>
                        <td>Product ID</td>
                        <td>Product Name</td>
                        <td>Product Price</td>
                        <td>Seller Name</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (                            
                    <tr key={product.productID}>
                            <td>{product.productID}</td>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.sellerName}</td>
                            <td>
                                <DeleteProduct product={product} onDelete={() => handleDelete(product.productID)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
       
    </div>
);
};
