const mongoose = require("mongoose");
const { Schema } = mongoose;

const carritoEsquema = new Schema({
    //idUsuario: { type: Schema.Types.Mixed, ref: 'usuario' }, // Referencia al usuario si ha iniciado sesión
    emailUsuario: String, //el email no se repite es unico
    productos: [{
        //idProducto: { type: mongoose.Schema.Types.ObjectId, ref: 'pienso', required: true },
        nombreProd: {type: String, required: true},//el nombre no se repite es unico
        cantidad: { type: Number, default: 1 }, // La cantidad por defecto será 1
        precio: {type: Number},
        stock: {type: Number}
    }],
    total: { type: Number, default: 0 }
});

module.exports = mongoose.model('carrito', carritoEsquema);
