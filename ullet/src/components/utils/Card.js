import React from 'react';
import "./Card.css"


export default function Card(props) {

    const { children, padding, flexDirection, borderRadius } = props

    return (<div style={{ padding, flexDirection, borderRadius }} className='card'>{children}</div>)
}