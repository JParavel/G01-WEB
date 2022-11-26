import express from "express"

const router = express.Router()

const usuario = {
    "nombre de usuario":"Maria Jose",
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

// localhost:3000/usuario/
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
router.get("/agrupar", (req, res) => {
    res.send("Usted esta en la pestaña de AGRUPAR!.")
})

router.get("/agrupar/:args", (req, res) => {
    let nombres = req.params.args
    nombres = nombres.split(" ")
    //  nombres = "Juan Andrea Daniel Laura"
    //  nombres = ["Juan", "Andrea", "Daniel", "Laura"]
    res.json(nombres)
})

router.get("/:nombre", (req, res) => {
    let nombre = req.params.nombre
    res.send("Usted está buscando al usuario: "+nombre)
})

router.get("/:nombre/:id", (req, res) => {
    let nombre = req.params.nombre
    let idUsuario = req.params.id
    res.json({
        "nombre de usuario":nombre,
        "id usuario":idUsuario
    })
})

export default router