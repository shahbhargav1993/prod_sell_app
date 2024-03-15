import React, { useEffect, useState } from 'react';
import { getAllSellerAPI } from '../services/SellerService';
import { DeleteSeller } from './DeleteSeller';
import { Seller, SellerReturned } from '../model/Seller';
import { Link } from 'react-router-dom';

export const SellerList: React.FC = () => {
    
    const [sellers, setSellers] = useState<SellerReturned[]>([]);

    useEffect(() => {
    fetchSellers();
    }, []);

const fetchSellers = async () => {
    const response = await getAllSellerAPI();
    const data = await response.json();
    setSellers(data);
};

const handleDelete = (sellerId: string) => {
    setSellers(sellers.filter(seller => seller.sellerID !== sellerId));
    fetchSellers(); // Refresh the list after deletion
};

return (

<div>
    <h2>Seller List</h2>
    <Link to="/add-seller">Add Seller</Link>

    <table className='mytable'>
        <thead>
            <tr>
                <td>Seller ID</td>
                <td>Seller Name</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {sellers.map((seller) => (                            
            <tr key={seller.sellerID}>
                    <td>{seller.sellerID}</td>
                    <td>{seller.sellerName}</td>
                    <td>
                    <DeleteSeller seller={seller} onDelete={() => handleDelete(seller.sellerID)} />
                    </td>
                </tr>
            ))}
        </tbody>
</table>

</div>

);
};