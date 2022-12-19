import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import UserContext from "../../contexts/UserContext";
import { login } from "../../services/authService";

import "./Login.css";

function Login() {
  const { setUser } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();

  async function onButtonClick(event) {
    event.preventDefault();

    const token = await login(userInput, passwordInput);

    if (token) {
      setUser(userInput);
      navigate("/panel");
    }
  }

  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo showText={false} size="48px" />
        </Link>
        <h1 className="title">
          Iniciar Sesión en <b>Ullet</b>
        </h1>
        <p>¡Que gusto verte nuevamente!</p>
        <form className="flex card form">
          <Input onChange={(e) => setUserInput(e.target.value)}>Usuario</Input>
          <Input
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
          >
            Contraseña
          </Input>
          <Button onClick={onButtonClick} style="fill">
            Iniciar Sesión
          </Button>
        </form>
        <div className="register card">
          <p>
            ¿Nuevo en Ullet? <Link to="/register">Crear una cuenta</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
