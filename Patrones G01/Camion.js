class Camion{

    constructor(id, conductor){
        this.placa = id;
        this.conductor = conductor;
    }

    transportar(lugar){
        console.log("El Camion 🚚["+this.placa+"] está transportando el pedido a: "+lugar+", por medio terrestre");
    }
}

export default Camion;