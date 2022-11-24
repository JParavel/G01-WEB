import express from "express";

const app = express();
const puerto = 3000;

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando.");
})

app.get("/", (req, res) => {
    //Implementar el codigo
    res.send("Hola, Mundo!")
})

app.get("/home", (req, res) => {
    //Implementar el codigo
    res.send("Estas en el apartado HOME")
})

app.get("/home/G01", (req, res) => {
    //Implementar el codigo
    res.send("Bienvenido a la clase G01")
})