export class Usuario {
    _id : string;
    nombreCompleto: string;
    direccion : string;    
    telefono : string;
    email : string;
    password : string;
    rol: string;

    constructor(){
        this._id = "";
        this.nombreCompleto = "";
        this.direccion = "";
        this.telefono = "";
        this.email = "";
        this.password = "";
        this.rol = "";
    }
}
