import express from "express"

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

let publicaciones = []

router.post("/nuevo", function (req, res){

    let id = Math.random().toString(36).slice(2)

    let publicacion = {
        "nuestra publicacion": req.body.publicacion,
        "identificiador de la publicacion":id
    }

    res.json(publicacion)

    publicaciones.push(publicacion)
})

router.get("/lista", (req, res) => {
    //Implementar el codigo
    res.json(publicaciones)
})



export default router;