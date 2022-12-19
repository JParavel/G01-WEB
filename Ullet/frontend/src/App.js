import React from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/global.css";
import Navbar from "./components/ui/Navbar";
import { UserProvider } from "./contexts/UserContext";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import UserPanel from "./views/panel/UserPanel";
import Register from "./views/register/Register";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1 className="container">About</h1>} />
      </Route>

      <Route
        path="/login"
        element={
          <UserProvider>
            <Login />
          </UserProvider>
        }
      />
      <Route
        path="/register"
        element={
          <UserProvider>
            <Register />
          </UserProvider>
        }
      />
      <Route
        path="/panel"
        element={
          <UserProvider>
            <UserPanel />
          </UserProvider>
        }
      />
    </Routes>
  );
}

export default App;
