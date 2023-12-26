export class Pienso {
    _id: string;
    imagen: string;
    nombre: string; //Canine Yorkshire
    tipoAnimal: string; //perro, gato...
    marca: string; //Royal Canin, 
    precio: number;
    stock : number;
    descripcion: string;
    peso: number; //peso del producto
    edad: string; //cachorro, adulto, senior
    sabor: string; //pollo,pescado,carne

    constructor(){
        this._id = "";
        this.imagen = "";
        this.nombre = "";
        this.tipoAnimal = "";
        this.marca = "";
        this.precio = 0;
        this.stock = 0;
        this.descripcion= "";
        this.peso = 0;
        this.edad = "";
        this.sabor = "";
    }
}
