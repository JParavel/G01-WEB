import React from 'react';
import UserCard from '../components/Users/UserCard';

function User() {

    const userData = {
        nombre: "Juanito",
        ciudad: "Barranquilla"
    }

    return (
        <div>
            <h1>Estos son los usuarios de nuestra aplicación</h1>
            <UserCard userData={userData}></UserCard>
        </div>
    )
}

export default User;