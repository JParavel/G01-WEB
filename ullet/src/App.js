import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom"

import "./assets/global.css"

import Users from './views/Users';
import User from './views/User';
import NewUser from './views/NewUser';
import Nav from './components/Nav';
import Home from './views/home/Home';
import Login from './views/Login/Login';


export default function App() {

    return (
        <div>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<p className='container'>Esta es la mejor cartera virtual del momento</p>} />
            </Routes>

        </div>
    )
}