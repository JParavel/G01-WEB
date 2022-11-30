import express from "express"
import userRouter from "./routes/userRouter.js";

const app = express();

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("El servidor se está ejecutando correctamente.");
})

//Midleware
app.use(express.json())
app.use("/user", userRouter)