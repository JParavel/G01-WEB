import React from 'react';
import { useParams } from 'react-router-dom';

function User() {

    const { name } = useParams()

    return (
        <h1>
            Estas viendo al usuario: {name}
        </h1>
    );
}

export default User;