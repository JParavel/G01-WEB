import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    value: { type: Number, required: true, min: 1000 },
}, { timestamps: true })

export default mongoose.model("transactions", transactionSchema)