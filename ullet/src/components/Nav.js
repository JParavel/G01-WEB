import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Logo from '../assets/Logo';
import WireButton from './forms/WireButton';

import "./Nav.css"


function Nav() {

    return (
        <nav className='nav'>
            <ul className='container flex'>
                <li><Logo /></li>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Nosotros</Link></li>
                <li><Link to="/login"><WireButton>Ingresar</WireButton></Link></li>
            </ul>
        </nav>
    );
}

export default Nav;