import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../services/product';
import './createProduct.css';

export default function CreateProduct() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");

    const updateInputState = (setState, event) => {
        setState(event.target.value)
    }

    const submitForm = async (event) => {
        event.preventDefault();
        await addProduct(title);
        navigate("/");
    }
    
  return (
    <div className='container__main__create__product'>
        <div className='container__formulaire__create__product'>
            <form onSubmit={submitForm}>
                <input required
                    placeholder='Nom du produit ***'
                    type='text'
                    value={title}  
                    onChange={(event) => {
                        updateInputState(setTitle, event)
                    }}
                />
                <button type='submit'>Enregistrer</button>
            </form>
        </div>
    </div>
  );
}
