import React, { useState } from 'react';
import "./assets/global.css"
import Home from './views/Home';
import Login from './views/Login';
import Users from './views/Users';

import { Link, Route, Routes } from "react-router-dom"
import User from './views/User';
import NewUser from './views/NewUser';
import Nav from './components/Nav';


export default function App() {

    return (
        <div>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/user'>
                    <Route path='/user/' element={<Users></Users>}></Route>
                    <Route path='/user/new' element={<NewUser></NewUser>}></Route>
                    <Route path='/user/:name' element={<User></User>}></Route>
                </Route>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
            </Routes>

        </div>
    )
}