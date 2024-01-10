const mongoose=require("mongoose");
const {Schema} = mongoose;

const carritoEsquema = new Schema({
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario'},
    productos: [{
      idProducto: { type: mongoose.Schema.Types.ObjectId, ref: 'pienso', required: true },
      nombre: string,
      cantidad: Number,
      precio: Number
    }],
    total: { type: Number, required: true}
});

module.exports=mongoose.model('carrito', carritoEsquema);