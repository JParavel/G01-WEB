import React, { useState } from 'react';

import Card from '../components/utils/Card';
import Gap from '../components/utils/Gap';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';

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
        <form onSubmit={onSubmit}>
            <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
                <h1>Login</h1>
                <Gap>2rem</Gap>
                <Input onChange={(v) => setUser(v.target.value)}>User Name</Input>
                <Gap>0.5rem</Gap>
                <Input type="password" onChange={(v) => setPassword(v.target.value)}>Contraseña</Input>
                <Gap>2rem</Gap>
                <Button type="submit"><b>INGRESAR</b></Button>
            </Card>
        </form>
    )
}