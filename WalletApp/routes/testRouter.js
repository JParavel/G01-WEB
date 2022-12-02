import express from "express"
import userModel from "../models/userModel.js"

const testRouter = express.Router()

testRouter.get("/", async (req, res) => {

    let documentos;

    try {
        documentos = await userModel.find({
            "edad": {$gte:20, $lte:40},
            // "edad": {$in:{$range:[20, 40]}}
        }).sort({"edad": -1})
    } catch (error) {

    }
    res.json(documentos)
})

export default testRouter