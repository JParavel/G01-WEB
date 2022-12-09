import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"

export default async function login(req, res) {

    try {
        const { user, password } = req.body

        const document = await userModel.findOne({ "nombre": user })

        if (document != null) {
            const documentPassword = document.password
            const access = await bcrypt.compare(password, documentPassword)

            if (access) {
                res.json({ "message": "Bienvenido" })
                console.log("Bienvenido");
            }
        } else {
            res.sendStatus(401)
        }

    } catch (error) {
        res.status(401).json(error.message)
    }


}