import React, { useState } from 'react';

import Input from '../../components/forms/Input';
import Button from '../../components/forms/Button';

import "./Login.css"
import Logo from '../../assets/Logo';

export default function Login() {

    async function onSubmit(e) {
        e.preventDefault()

        const res = await fetch("http://localhost:8080/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user,
                password
            })
        })

        if (res.ok) {
            const data = await res.json()
            alert(data.message)
        }

    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className='login'>
            <Logo renderText={false} size="40px" />
            <p className='title'>Iniciar Sesión En <b>Ullet</b></p>
            <form onSubmit={onSubmit} className="flex card form">
                <Input onChange={(v) => setUser(v.target.value)}><b>Nombre De Usuario</b></Input>
                <Input type="password" onChange={(v) => setPassword(v.target.value)}><b>Contraseña</b></Input>
                <Button type="submit"><b>INGRESAR</b></Button>
            </form>
        </section>
    )
}