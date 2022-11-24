import express from "express";

const app = express();
const puerto = 3000;

function callback(){
    console.log("El servidor se esta ejecutando.");
}

app.listen(puerto, callback)