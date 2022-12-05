import mongoose from "mongoose";

const perfil = mongoose.Schema({
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

const userModel = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
    unique: true,
  },
  edad: { type: Number, required: true, min: 14, max: 90, validate: { validator: validacionPar, message: "la edad debe ser un número par" } },
  ciudad: { type: String, required: true, enum: ciudadesPosibles },
});

export default mongoose.model("users", userModel);
