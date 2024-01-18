const mongoose = require("mongoose");
const { Schema } = mongoose;

const misComprasEsquema = new Schema({
    emailUsuario: {type: String, required: true},
    numPedido : {type: Number, required: true},
    productos : [{
        idCompra: {type: Number, required: true},
        nombreProd: {type: String, required: true},
        cantidad: {type: Number, default: 1},
        precio: {type: Number, required: true},
        totalProd: {type: Number, required: true}
    }],
    total: {type: Number, required: true}
})

module.exports = mongoose.model('misCompras', misComprasEsquema);