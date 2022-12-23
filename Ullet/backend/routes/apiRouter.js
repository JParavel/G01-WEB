import express from "express";
import { login } from "../modules/authModule.js";
import userRouter from "./userRouter.js";

const apiRouter = express.Router();
//api
apiRouter.use("/user", userRouter);
apiRouter.get("/login", login);

export default apiRouter;
