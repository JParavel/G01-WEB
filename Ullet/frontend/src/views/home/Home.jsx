import React from "react";
import Button from "../../components/forms/Button";

import "./Home.css";

// @ts-ignore
import illustration from "../../assets/home_illustration.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="header">
      <div className="grid container">
        <div className="headline">
          <div className="main-headline">
            <p className="title">Tus Pagos</p>
            <p className="content">RÁPIDOS Y EFECTIVOS</p>
          </div>
          <p className="supp-headline">
            Manejar tu plata nunca había sido tan fácil como en <b>Ullet</b>.
          </p>
          <Link to="/register">
            <Button style="fill">Quero Mi Cuenta</Button>
          </Link>
        </div>

        <div className="illustration">
          <img src={illustration}></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
