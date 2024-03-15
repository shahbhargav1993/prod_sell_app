import React from 'react';
import { Seller, SellerReturned } from '../model/Seller';
import { deleteSellerAPI } from '../services/SellerService';

interface DeleteSellerProps {
seller: SellerReturned;
onDelete: () => void; // Callback to refresh the seller list after deletion
}

export const DeleteSeller: React.FC<DeleteSellerProps> = ({ seller, onDelete }) => {
    const handleDelete = async () => {
        if(!window.confirm('Are you sure you are deleting seller: ' + seller.sellerName)) {
            return;
        }
    
        await deleteSellerAPI(seller.sellerID);
        onDelete();
    };

return (
<button onClick={handleDelete}>Delete</button>
);
};