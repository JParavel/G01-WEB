import React from 'react';
import Button from '../components/forms/Button';
import Container from '../components/utils/Container';
import Gap from '../components/utils/Gap';

import "./home.css"

function Home() {
    return (
        <section className='home'>
            <Gap>5rem</Gap>
            <Container className="home">
                <h4>Tus Pagos ...</h4>
                <h1>RÁPIDOS Y EFECTIVOS</h1>
                <Gap>3rem</Gap>
                <p>Manejar tu plata nunca había sido fácil como en Ullet</p>
                <Gap>3rem</Gap>
                <Button>QUIERO MI CUENTA</Button>
            </Container>
        </section>
    );
}

export default Home;