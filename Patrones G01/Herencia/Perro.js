import Animal from "./Animal.js";

export default class Perro extends Animal{

    constructor(edad, raza){
        super(edad)

        this.raza = raza;
    }

    ladrar(){
        console.log("El perro de la raza "+ this.raza +" ladra.");
    }

    //La clase perro también hereda la función comer.
}

