import transactionModel from "../models/transactionModel.js";
import { getUser } from "../services/userService.js";

export async function createTransaction(req, res) {
  try {
    const { transaction } = req.body;
    const document = await transactionModel.create(transaction);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readTransaction(req, res) {
  try {
    const { token } = req.headers;

    const user = await getUser(token);

    const documents = await transactionModel.find({
      $or: [{ from: user.name }, { to: user.name }],
    });
    res.status(200).json(documents);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
