import express from "express"
import {crearPublicacion, leerPublicacion, leerPublicaciones} from "../controllers/homeController.js"

let router = express.Router()

// localhost:3000/home

router.get("/", (req, res) => {
    //Implementar el codigo
    res.send("Estas en el apartado <b>HOME</b>")
})

router.get("/G01", (req, res) => {
    //Implementar el codigo
    res.send("Bienvenido a la clase G01")
})

//CRUD

//CREAR : create
//LEER: read
//ACTUALIZAR: update
//ELIMINAR: delete

router.post("/nuevo", function (req, res){
    crearPublicacion(req, res);
})

router.get("/lista", (req, res) => {
    leerPublicaciones(req, res)
})

router.get("/lista/:id", (req, res) => {
    leerPublicacion(req, res)
})

export default router;