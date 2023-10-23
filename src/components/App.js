import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './app.css';

export default function App() {
  return (
    <div className='container__app'>
      <Navbar />
      <Outlet />
    </div>
  )
}