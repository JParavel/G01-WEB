import React from 'react';
import "./forms.css"

export default function Button(props) {

    const { children, onClick, type } = props

    return (
        <button className='wire-button' type={type} onClick={onClick}>
            {children}
        </button>
    )
}