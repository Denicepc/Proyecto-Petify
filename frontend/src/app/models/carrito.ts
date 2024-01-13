export class Carrito {
    _id: string;
    productos: ProductoCarrito[];
    total: number;

    constructor(){
        this._id = "";
        this.productos = [];
        this.total = 0;
    }
}


export class ProductoCarrito {
    idProducto: string; 
    nombre: string;
    cantidad: number;
    precio: number;
  
    constructor(idProducto: string, nombre:string, cantidad: number, precio: number) {
      this.idProducto = idProducto;
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.precio = precio;
    }
  }
