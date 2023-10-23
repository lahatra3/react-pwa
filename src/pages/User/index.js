import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../services/user';
import './user.css';

export default function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUsers();
            setUser(user.users);
        };
        fetchUser();     
    }, []);

  return (
    (user && user.length > 0) && (
        <div className='container__main__user'>
            <div className='container__user'>
                {
                    user.map((value, index) => (
                    <div className='user__item' key={index + '__user'}>
                        <div className='card'>
                            <div className='img'>
                                <img src={value.image} width={217}/>
                            </div>
                            <div className='firstname'>{value.lastName}</div>
                            <div className='lastname'>{value.firstName}</div>
                            <div className='email'>{value.email}</div>
                            <div className='phone'>{value.phone}</div>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className='container__button_create_user'>
                <button>
                    <Link to={"/user/create"}>Ajouter</Link>
                </button>
            </div>
        </div>
    )
  );
}
