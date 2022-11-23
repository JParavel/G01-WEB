import Camion from "./Camion.js";

class Servicio{

    idServicio = 0;

    constructor(){
        this.generarId();
    }

    generarId(){
        this.idServicio = Math.random().toString(36).slice(2);
    }

    obtenerTransporte(){
        return new Camion(this.idServicio, "Bad Bunny")
    }
}

export default Servicio;