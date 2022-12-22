import React from 'react';

import "./UserPanel.css"

function Transaction(props) {

    const { data, user } = props

    const { from, to, value, createdAt } = data

    const date = createdAt.substr(0, 10)

    if (from == user) {
        return (
            <div className='transaction grid card' style={{ marginLeft: "auto" }}>
                <p className='from'>{to}</p>
                <p className="negative-value">$ {value}</p>
                <p className='date'>{date}</p>
            </div>
        )
    } else {
        return (
            <div className='transaction grid card'>
                <p className='from'>{from}</p>
                <p className="positive-value">$ {value}</p>
                <p className='date'>{date}</p>
            </div>
        );
    }
}

export default Transaction;