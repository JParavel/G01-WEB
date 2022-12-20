import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";
import { getTransactions } from "../../services/transactionService";
import Transaction from "./Transaction";

import "./UserPanel.css";

function UserPanel() {
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);
  const [cookies, setCookies] = useCookies(["token", "user"]);

  const currentUser = user ? user : cookies.user;
  const currentToken = token ? token : cookies.token;

  const navigate = useNavigate();

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    console.log(token);
    console.log(cookies.token);

    if (!currentUser) {
      return navigate("/login");
    }

    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const documents = await getTransactions(currentToken);
    setDocuments(documents);
  }

  return (
    <section className="panel">
      <div className="container">
        <div className="balance card flex">
          <h2>Saldo</h2>
          <p className="value">$ 1.512.123</p>
        </div>

        <div className="movements card">
          <h2>Mis Movimientos</h2>
          <div className="transactions flex card">
            {documents.map((transaction) => (
              <Transaction
                data={transaction}
                user={currentUser}
                key={transaction._id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserPanel;
