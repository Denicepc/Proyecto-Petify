const mongoose=require("mongoose");
const {Schema} = mongoose;

const proveedoresEsquema = new Schema({
    nombreProveedor : {type:String, required: true},
    ciudad : {type:String, required: true},
    pais : {type:String, required: true},
});

module.exports=mongoose.model('proveedores', proveedoresEsquema);