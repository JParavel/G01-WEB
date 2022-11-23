// import Animal from "./Extras/Animal.js";
// import Perro from "./Extras/Perro.js";

// const animal = new Animal(15);
// animal.comer();
// const calvin = new Perro(7, "pug")

// calvin.comer();
// calvin.ladrar();

import Avion from "./Avion.js";
import Servicio from "./Servicio.js";
import ServicioAereo from "./ServicioAereo.js";

//Nuestra aplicacion de mensajeria
const servicioTerrestre = new Servicio();
const servicioTerrestre2 = new Servicio();
const servicioAereo = new ServicioAereo();
const servicioAereo2 = new ServicioAereo();

// const ford = servicioTerrestre.obtenerTransporte();
// const avion = servicioAereo.obtenerTransporte();


function enviarPaquete(servicio, lugar){

    const transporte = servicio.obtenerTransporte();
    transporte.transportar(lugar);
}

enviarPaquete(servicioAereo, "Bucaramanga")
enviarPaquete(servicioAereo, "Riohacha")
enviarPaquete(servicioAereo2, "Bogotá")
enviarPaquete(servicioTerrestre, "Cali")
enviarPaquete(servicioTerrestre, "Otra Ciudad")
enviarPaquete(servicioTerrestre2, "Pereira")

// function realizarEnvio(transporte, lugar){
//     transporte.transportar(lugar);
//     console.log(transporte.conductor);
// }


// realizarEnvio(ford, "Cali");
// realizarEnvio(avion, "Barranquilla")
