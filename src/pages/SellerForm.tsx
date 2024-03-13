import React, { useState } from 'react';
import { postSomeSeller } from '../services/SellerService';

export function AddSellerForm() {
    const [sellerID, setSellerID] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
        await postSomeSeller({ sellerID: Number(sellerID),sellerName });
        setSuccessMessage('Congratulations, you successfully added the seller.')
        // Reset form or show success message
        setSellerID('');
        setSellerName('');   
        }catch(error){
                console.error('Error adding product:',error)
                setErrorMessage('Sorry, Please check it again')
        };
    }

return (
    <div className="form-container">
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