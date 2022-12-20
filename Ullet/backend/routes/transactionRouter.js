import express from "express";
import {
  createTransaction,
  readTransaction,
} from "../controllers/transactionController.js";
import { validateToken } from "../modules/authModule.js";

const transactionRouter = express.Router();

transactionRouter.post("/", createTransaction);
transactionRouter.get("/", validateToken, readTransaction);

export default transactionRouter;
