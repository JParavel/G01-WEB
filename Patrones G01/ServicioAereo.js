import Avion from "./Avion.js";
import Servicio from "./Servicio.js";

class ServicioAereo extends Servicio{

    // idServicio = 0;

    // constructor(){
    //     this.generarId();
    // }

    // generarId(){
    //     this.idServicio = Math.random().toString(36).slice(2);
    // }

    constructor(){
        super();
    }

    obtenerTransporte(){
        return new Avion(this.idServicio)
    }
}

export default ServicioAereo;