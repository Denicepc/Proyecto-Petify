const mongoose = require("mongoose");
const { Schema } = mongoose;

const carritoEsquema = new Schema({
    idUsuario: { type: Schema.Types.Mixed, ref: 'usuario' }, // Referencia al usuario si ha iniciado sesión
    productos: [{
        idProducto: { type: mongoose.Schema.Types.ObjectId, ref: 'pienso', required: true },
        nombre: String,
        cantidad: { type: Number, default: 1 }, // La cantidad por defecto será 1
        precio: Number
    }],
    total: { type: Number, default: 0 }
});

module.exports = mongoose.model('carrito', carritoEsquema);
