import express from "express";
import transactionRouter from "./transactionRouter.js";

const apiRouter = express.Router();

apiRouter.use("/transaction", transactionRouter);

export default apiRouter;
