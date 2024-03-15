import React from 'react';
import { Product, ProductReturned } from '../model/Product';
import { deleteProductAPI } from '../services/ProductService';

interface DeleteProductProps {
product: ProductReturned;
onDelete: () => void; // Callback to refresh the product list after deletion
}

export const DeleteProduct: React.FC<DeleteProductProps> = ({ product, onDelete }) => {
const handleDelete = async () => {

    if(!window.confirm('Are you sure you are deleting product: ' + product.productName)) {
        return;
    }

    await deleteProductAPI(product.productID);
    onDelete();
};

return (
<button onClick={handleDelete}>Delete</button>
);
}