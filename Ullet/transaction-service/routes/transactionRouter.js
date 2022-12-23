import express from "express";
import {
  createTransaction,
  readTransaction,
} from "../controllers/transactionController.js";

const transactionRouter = express.Router();

transactionRouter.post("/", createTransaction);
transactionRouter.get("/", readTransaction);

export default transactionRouter;
