import React, { useState } from 'react';
import { postSomeProduct } from '../services/ProductService';
import { Link } from 'react-router-dom';

export function AddProductForm() {
    const [productName, setProductName] = useState('');
    const [productID, setProductID] = useState('');
    const [price, setPrice] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            await postSomeProduct({ productID: productID,productName, price:Number(price), sellerName });
            setSuccessMessage('Congratulations, you successfully added the product.')
            setProductName('');
            setPrice('');
            setProductName('');
            setSellerName('');
            window.location.href = '/products';
        } catch(error){
            const e = error as Error;
            console.error('Error adding product:',error)
            setErrorMessage(e.message||'Sorry, an error occurred. Please check it again')
        }
};


return (
    <div className="form-container">

        <Link to="/products">Product List</Link>
        <br />
        <form onSubmit={handleSubmit} className="form-style">
            <label className="form-label">
                Enter Product ID:
                <input
                    type="text"
                    value={productID}
                    onChange={e => setProductID(e.target.value)}
                    className="form-input"
                />
            </label>
            <label className="form-label">
                Enter Product Name:
                <input
                    type="text"
                    value={productName}
                    onChange={e => setProductName(e.target.value)}
                    className="form-input"
                />
            </label>
            <label className="form-label">
                Enter Product Price:
                <input
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="form-input"
                />
                </label>
                <label className="form-label">
                    Enter Seller Name:
                        <input
                            type="text"
                            value={sellerName}
                            onChange={e => setSellerName(e.target.value)}
                            className="form-input"
                        />
                </label>
                <button type="submit" className="form-submit">Submit</button>
        </form>
        {successMessage && <div className='success-message'>{successMessage}</div>}
        {errorMessage && <div className='error-message'>{errorMessage}
        </div>}
    </div>
);
    
}