import React from 'react';
import Flex from '../components/utils/Flex';

import "./global.css"
// @ts-ignore
import logo from "./logo.png"

function Logo() {
    return (
        <Flex gap="0.5rem">
            <img src={logo} style={{ width: "51px", height: "51px" }}></img>
            <h1 className='logo-title'>Ullet</h1>
        </Flex>
    );
}

export default Logo;