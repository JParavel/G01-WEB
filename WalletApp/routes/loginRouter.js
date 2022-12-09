import express from "express"
import login from "../controllers/loginController.js"

const loginRouter = express.Router()

loginRouter.post("/", login)

export default loginRouter