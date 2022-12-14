import mongoose from "mongoose";

const perfil = new mongoose.Schema({
  mensaje: { type: String, required: true },
  estado: String,
});

const ciudadesPosibles = ["Bogotá", "Cali", "Medellin", "Barranquilla", "Cartagena", "Bucaramanga"];

function validacionPar(numero) {
  if (numero % 2 == 0) {
    return true
  } else {
    return false
  }
}

const userModel = new mongoose.Schema({
  nombre: { type: String, required: true, minLength: 3, maxLength: 30, unique: true, },
  password: { type: String, required: true },
  ciudad: { type: String, required: true, enum: ciudadesPosibles }
}, {
  timestamps: true
});

export default mongoose.model("users", userModel);
