import React, { useState } from 'react'
import { addUser } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import './createUser.css';


export default function CreateUser() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

    const updateInputState = (setState, event) => {
        setState(event.target.value)
    }

    const submitForm = async (event) => {
        event.preventDefault();
        await addUser({ firstName, lastName, age });
        navigate("/");
    }

  return (
    <div className='container__main__create__user'>
        <div className='container__formulaire__create__user'>
            <form onSubmit={submitForm}>
                <input required
                    placeholder='Nom ***'
                    type='text'
                    value={lastName}  
                    onChange={(event) => {
                        updateInputState(setLastName, event)
                    }}
                />
                <input 
                    required
                    placeholder='Prenom(s) ***' 
                    type='text'
                    value={firstName} 
                    onChange={(event) => {
                        updateInputState(setFirstName, event)
                    }}
                />
                <input 
                    required
                    placeholder='Age ***'
                    type='number'
                    value={age} 
                    onChange={(event) => {
                        updateInputState(setAge, event)
                    }}
                />
                <button type='submit'>Enregistrer</button>
            </form>
        </div>
    </div>
  );
}
