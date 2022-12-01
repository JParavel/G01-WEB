import userModel from "../models/userModel.js"

//CRUD
export async function createUser(req, res){
    //IMPLEMENTACION AQUI
    const {nombre, edad, ciudad} = req.body.usuario

    const usuario = await userModel.create({
        nombre,
        edad,
        ciudad
    })

    res.status(201).json(usuario)
}

export function readUser(res){
    //IMPLEMENTACION AQUI
    res.sendStatus(200)
}

export function updateUser(res){
    //IMPLEMENTACION AQUI
    res.sendStatus(200)
}

export function deleteUser(res){
    //IMPLEMENTACION AQUI
    res.sendStatus(200)
}