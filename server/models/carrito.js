const mongoose=require("mongoose");
const {Schema} = mongoose;

const carritoEsquema = new Schema({
    productos: [{
      idProducto: { type: mongoose.Schema.Types.ObjectId, ref: 'pienso', required: true },
      cantidad: Number,
      precio: Number
    }],
    total: { type: Number, required: true}
});

module.exports=mongoose.model('carrito', carritoEsquema);