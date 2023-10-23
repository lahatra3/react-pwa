import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
  return (
    <div className='container__navbar'>
        <button>
            <Link to={"/"}>Utilisateurs</Link>
        </button>
        <button>
            <Link to={"/product"}>Produits</Link>
        </button>
        <button>
            <Link to={"/command"}>Commandes</Link>
        </button>
    </div>
  )
}