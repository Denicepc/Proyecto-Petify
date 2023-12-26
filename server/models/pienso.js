const mongoose=require("mongoose");
const {Schema} = mongoose;

const piensoEsquema = new Schema({
    imagen : {type:String, required: true},
    nombre : {type:String, required: true},
    tipoAnimal : {type:String, required: true},
    marca : {type:String, required: true},
    precio : {type:Number, required: true},
    stock : {type:Number, required: true},
    descripcion : {type:String, required: true},
    peso : {type:Number, required: true},
    edad: {type:String, required: true},
    sabor : {type:String, required: true}
});

module.exports=mongoose.model('pienso', piensoEsquema);