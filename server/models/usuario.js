const mongoose = require('mongoose');
const { Schema } = mongoose;
//vamos a utilizar mongoose para definir los esquemas de datos

const usuarioEsquema = new Schema({
    nombreCompleto : {type: String, required: true},
    direccion : {type: String, required: true},
    telefono : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    rol : {type: String, required: true}
});

module.exports = mongoose.model('usuario', usuarioEsquema);
//el export sirve para que lo podamos usar en otras parte el proyecto