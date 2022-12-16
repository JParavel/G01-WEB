import transactionModel from "../models/transactionModel.js"

export async function createTransaction(req, res) {
    try {
        const { transaction } = req.body
        const document = await transactionModel.create(transaction)
        res.status(201).json(document)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export async function readTransaction(req, res) {

    const { name } = req.params

    try {
        const documents = await transactionModel.find({
            $or: [
                { from: name },
                { to: name }
            ]
        })
        res.status(200).json(documents)
    } catch (error) {
        res.status(400).json(error.message)
    }
}