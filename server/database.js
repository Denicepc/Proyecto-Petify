//conecta a la base de datos
const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/petify'; //creamos la base

mongoose.connect(URI) //le damos la url de la base de datos
    .then(db => console.log("La base de datos está conectada")) //promesa para que muestre un mensaje cuando se conecte
    .catch(err => console.error(err)); //si falla muestra el error

module.exports = mongoose; //tenemos que exportalo