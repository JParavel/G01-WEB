import express from "express"
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js"

const userRouter = express.Router()

//CRUD
//CREAR: POST
userRouter.post("/", (req, res) => {
    createUser(res)
})

//LEER: GET
userRouter.get("/", (req, res) => {
    readUser(res)
})

//ACTUALIZAR: PUT / PATCH
userRouter.patch("/", (req, res) => {
    updateUser(res)
})

//ELIMINAR: DELETE
userRouter.delete("/", (req, res) => {
    deleteUser(res)
})

export default userRouter