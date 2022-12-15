import React from 'react';
import "./forms.css"

export default function Input(props) {

    const { children, type, onChange, placeholder } = props

    return (
        <label className='input'>
            {children}
            <input type={type} onChange={onChange} placeholder={placeholder}></input>
        </label>
    )
}