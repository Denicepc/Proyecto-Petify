const mongoose = require ('mongoose');
const URI = 'mongodb://127.0.0.1:27017/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('La base de datos está conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;