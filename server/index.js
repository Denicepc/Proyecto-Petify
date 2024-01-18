//configura el servidor cuando empieza

//requerimos express y lo guardamos en una constante para reutilizarlo
const express = require('express');
const morgan = require('morgan'); //nos va a ayudar a ver por consola que esta pidiendo el usuario
const cors = require('cors');
const app = express(); //esta constante va a tener toda la funcionalidad del servidor

const { mongoose } = require('./database'); //solo queremos la conexion de este archivo mongoose


//Settings - Configuración
//vamos a configurar el puerto en donde se ejecuta la aplicacion
app.set('port', process.env.PORT || 3000); //esto es como una variable 
//hacemos que con process.env.PORT que recoja el puerto proporcionado por el sistema
//sino hay ninguna coge el 3000

//Middlewares - va a tener funciones que nos van a ayudar a procesar los datos
app.use(morgan('dev')); 
app.use(express.json()); //ahora entiende json
app.use(cors({origin: 'http://localhost:4200'}));

//Routes - va a tener las rutas de nuestro servidor
app.use('/api/usuarios',require('./routes/usuario.routes'));
app.use('/api/piensos',require('./routes/pienso.routes'));
app.use('/api/carrito',require('./routes/carrito.routes'));
app.use('/api/compras',require('./routes/mis-compras.routes'));

//EMPIEZA EL SERVIDOR
//hacemos que escuche en un puerto
app.listen(app.get('port'), () => {
    console.log('Server ejecutandose en el puerto', app.get('port'));
});