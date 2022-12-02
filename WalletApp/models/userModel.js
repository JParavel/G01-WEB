import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "nombre": {type:String, required:true},
    "edad":{type:Number, required:true},
    "ciudad":{type:String, required:true},
    "correo": {type:String, required:true}
})

export default mongoose.model("users", userModel)