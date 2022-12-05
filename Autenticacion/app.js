import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const app = express()
const ACCESS_TOKEN = "72e7b6203919255c32f7363fbf4af5da3c2cb6d9aa04ea74d15d2d9f2c93972aa841566e912ce19b338750f133fc6fff70428a26ed87b739d87e5853d79c475e"

app.listen(3000)

app.use(express.json())

const userData = []

app.post("/register", async (req, res) => {
    const { usuario, contraseña } = req.body

    const salt = await bcrypt.genSalt(10)
    const contraseñaEncriptada = await bcrypt.hash(contraseña, salt)

    userData.push({
        usuario,
        contraseñaEncriptada
    })

    res.sendStatus(200)
})

app.post("/login", async (req, res) => {
    const { usuario, contraseña } = req.body

    const dataUsuario = userData.filter(data => data.usuario == usuario)

    const acceso = await bcrypt.compare(contraseña, dataUsuario[0].contraseñaEncriptada)
    console.log(acceso);

    if (acceso) {
        const token = jwt.sign(usuario, ACCESS_TOKEN)
        res.status(200).json(token)
        //GENERAR UNA ID DE SESION
    } else {
        res.sendStatus(401)
    }

})

app.get("/verificar", (req, res) => {

    const { token } = req.headers

    let usuario;
    try {
        usuario = jwt.verify(token, ACCESS_TOKEN)
    } catch (error) {
        res.json(error.message)
        return
    }


    res.json(usuario)
})


app.get("/", (req, res) => {
    res.json(userData)
})