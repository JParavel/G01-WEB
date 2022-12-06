import React from 'react';

import Card from './Card';
import Gap from './Gap';
import Input from './forms/Input';
import Button from './forms/Button';

export default function Login() {
    return (<Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
        <h1>Login</h1>
        <Gap>2rem</Gap>
        <Input>User Name</Input>
        <Gap>0.5rem</Gap>
        <Input type="password">Contraseña</Input>
        <Gap>2rem</Gap>
        <Button><b>INGRESAR</b></Button>
    </Card>)
}