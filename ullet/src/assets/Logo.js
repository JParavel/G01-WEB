import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Logo.css"
// @ts-ignore
import logo from "./logo.png"

function Logo(props) {

    const { size = "28px", renderText = true } = props

    const style = {
        width: size,
        height: size
    }

    return (
        <NavLink to="/" className="logo inline-flex">
            <img src={logo} style={style}></img>
            {renderText ? <h1 className='title'>Ullet</h1> : null}
        </NavLink>

    );
}

export default Logo;