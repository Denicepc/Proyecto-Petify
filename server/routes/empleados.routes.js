const express = require('express');
//sirve para crear nuestra primera ruta de tipo get
const router = express.Router(); 

const emplcontrol = require('../controllers/empleados.controlador');
router.get('/',emplcontrol.mostrarEmpleados );
//para crear empleado post
router.post('/',emplcontrol.crearEmpleado );

router.get('/:id',emplcontrol.mostrarEmpleado );
//editar es put
router.put('/:id',emplcontrol.editarEmpleado );
//para borrar
router.delete('/:id',emplcontrol.borrarEmpleado );

module.exports = router;

//req y res son objetos, req contiene informacion sobre la solicitud httpp que se hace sobre el cliente y puede acceder a diferentes propiedades para obtener detalles de esa solicitud, es decir, que va a servir para procesar los datos de entrada que se va a hacer desde un navegador
//res devuelve esa respuesta al cliente

//NOS DESCARGAMOS POSTMAN PARA PODER PROBAR PUT Y DELETE, YA QUE DESDE EL NAVEGADOR NO SE PUEDE