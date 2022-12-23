import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import apiRouter from "./routes/apiRouter.js";

dotenv.config();

const port = process.env.PORT;
const uri = process.env.URI;
const app = express();

app.listen(port, () => {
  console.log("Server is running on port" + port);
});

mongoose.set("strictQuery", true);
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("The database is connected");
  }
});

//Middlewares
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use(express.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Welcome to ullet transaction service!");
});
