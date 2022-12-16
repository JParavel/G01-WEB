import React, { useEffect, useState } from 'react';
import Transaction from './Transaction';

import "./UserPanel.css"



function UserPanel() {

    const user = "Camilo"

    async function fetchTransactions() {
        const res = await fetch("http://localhost:8080/api/transaction/" + user)
        const documents = await res.json()
        setDocuments(documents)
    }

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetchTransactions()
    }, []);

    return (
        <section className='panel'>
            <div className='container'>
                <div className='balance card flex'>
                    <h2>Saldo</h2>
                    <p className='value'>$ 1.512.123</p>
                </div>

                <div className='movements card'>
                    <h2>Mis Movimientos</h2>
                    <div className='transactions flex card'>
                        {documents.map((transaction) => <Transaction data={transaction} user={user} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserPanel;