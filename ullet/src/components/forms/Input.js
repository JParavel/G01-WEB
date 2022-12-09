import React from 'react';
import "./forms.css"

export default function Input(props) {

    const { children, type, value, onChange } = props

    return (<input className='input' type={type} value={value} onChange={onChange} placeholder={children}></input>)
}