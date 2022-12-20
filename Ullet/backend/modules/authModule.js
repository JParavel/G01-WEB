import userModel from "../models/userModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;

export function genToken(element) {
  // @ts-ignore
  return jwt.sign(element, privateKey);
}

export async function login(req, res) {
  try {
    const { name, password } = req.headers;

    const document = await userModel.findOne({ name });

    if (!document) return res.sendStatus(401);

    if (await bcrypt.compare(password, document.password)) {
      const token = genToken({ _id: document._id });
      return res.status(200).json({ token });
    }

    res.sendStatus(401);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
}

export async function validateToken(req, res, next) {
  try {
    const { token } = req.headers;
    const _id = jwt.verify(token, privateKey)._id;
    const document = await userModel.findById(_id);
    req.name = document.name;
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
}
