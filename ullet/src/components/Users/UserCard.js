import React from 'react';

function UserCard(props) {

    const { children, userData } = props
    return (
        <div className='flex'>
            <h3> {userData.nombre} </h3>
            <p> Ciudad: {userData.ciudad} </p>
        </div>
    );
}

export default UserCard;