import express from "express"

const router = express.Router()

const usuario = {
    nombre:"Maria Jose",
    correo: "mj@correo.com",
    edad: 15,
    notas: [
        3,
        4,
        4.8
    ],
    mascota:{
        nombre: "Calvin",
        raza: "Pitbull",
        edad: 7
    }
}

// localhost:3000/usuario/...

router.get("/", (req, res) => {
    //Implementar el codigo
    res.json(usuario)
})

router.get("/mascota", (req, res) => {
    //Implementar el codigo
    res.json(usuario.mascota)
})

router.get("/nombre", (req, res) => {
    //Implementar el codigo
    res.json(usuario.nombre)
})

export default router