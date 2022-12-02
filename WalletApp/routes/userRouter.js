import express from "express"
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js"

const userRouter = express.Router()

//CRUD
//CREAR: POST
userRouter.post("/", (req, res) => {
    createUser(req, res)
})

//LEER: GET
userRouter.get("/:id", (req, res) => {
    readUser(req, res)
})

//ACTUALIZAR: PUT / PATCH
userRouter.patch("/:id", (req, res) => {
    updateUser(req, res)
})

//ELIMINAR: DELETE
userRouter.delete("/", (req, res) => {
    deleteUser(req, res)
})

export default userRouter