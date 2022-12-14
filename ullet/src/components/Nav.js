import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Logo from '../assets/Logo';
import WireButton from './forms/WireButton';
import Container from './utils/Container';
import Flex from './utils/Flex';

import "./components.css"


function Nav() {

    return (
        <nav className='nav'>
            <Container>
                <Flex className="nav">
                    <Logo></Logo>
                    <Link to="/"><b>Inicio</b></Link>
                    <Link to="/"><b>Nosotros</b></Link>
                    <WireButton>INGRESAR</WireButton>
                </Flex>
            </Container>
        </nav>
    );
}

export default Nav;