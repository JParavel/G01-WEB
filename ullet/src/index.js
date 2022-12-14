import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById("root")
// @ts-ignore
const root = ReactDOM.createRoot(container)

root.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
)