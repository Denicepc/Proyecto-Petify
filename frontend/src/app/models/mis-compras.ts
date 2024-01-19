export class MisCompras {
    _id: string;
    emailUsuario: string;
    numPedido: Number;
    fecha: Date;
    productos: {
      idCompra: number;
      nombreProd: string;
      cantidad: number;
      precio: number;
      totalProd: number;
    }[];
    total: number;

    constructor(){
        this._id = "";
        this.emailUsuario = "";
        this.fecha = new Date();
        this.numPedido = 0;
        this.productos = []
        this.total = 0;
    }
}
