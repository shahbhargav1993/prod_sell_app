import React, { useState } from 'react';
import { postSomeSeller } from '../services/SellerService';
import { Link } from 'react-router-dom';

export function AddSellerForm() {
    const [sellerID, setSellerID] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
        await postSomeSeller({ sellerID,sellerName });
        setSuccessMessage('Congratulations, you successfully added the seller.')
        
        setSellerID('');
        setSellerName('');  
        window.location.href = '/sellers'; 
        }catch(error){
            const e = error as Error;
            console.error('Error adding product:',error);
            setErrorMessage(e.message ||'Sorry, an error occurred. Please check it again');
        };
    }

return (
    <div className="form-container">
        <Link to="/sellers">Seller List </Link>
        <br />

       <form onSubmit={handleSubmit} className="form-style">
            <label className="form-label">
                    Enter Seller ID:
                    <input
                        type="text"
                        value={sellerID}
                        onChange={e => setSellerID(e.target.value)}
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
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
    </div>
);
}