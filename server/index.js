const express = require('express');
const app = express();
const morgan = require('morgan');
const {mongoose} = require('./database.js'); //no queremos todo el archivo de database solo la conexion 
    //se especifica entre llaves
const cors = require('cors');
//Settings

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server ejecutandose en el puerto', app.get('port'))
});


//Midelware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use(require('./routes/empleados.routes'))
app.use('/api/empleados', require('./routes/empleados.routes'));

//Inicializar el servidor
