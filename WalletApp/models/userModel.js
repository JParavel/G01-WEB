import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "nombre":String,
    "edad":Number,
    "ciudad":String
})

export default mongoose.model("users", userModel)