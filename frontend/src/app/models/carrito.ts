export class Carrito {
    _id: string;
    emailUsuario: string;
    productos: ProductoCarrito[];
    total: number;

    constructor(){
        this._id = "";
        this.emailUsuario = "";
        this.productos = [];
        this.total = 0;
    }
}


export class ProductoCarrito { 
    nombreProd: string;
    cantidad: number;
    precio: number;
    stock: number;
  
    constructor(nombre:string, cantidad: number, precio: number, stock: number) {
      this.nombreProd = nombre;
      this.cantidad = cantidad;
      this.precio = precio;
      this.stock = stock;
    }
  }
