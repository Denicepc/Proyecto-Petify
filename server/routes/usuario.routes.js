//rutas de los usuarios
const express = require('express');
const router = express.Router(); //devuelve un objeto

const usuario = require('../controllers/usuario.controller');

router.get('/', usuario.getUsuarios); //oobtiene muchos usuarios


//ejercicio 55 usuario.service
router.get('/nom/:email', usuario.obtenerNombre);
router.get('/:id', usuario.getUsuario); //obtiene un empleado en especifico
router.put('/:id', usuario.editarUsuario); //nos permite editar
router.delete('/:id', usuario.eliminarUsuario); //nos permite eliminar el usuario
router.post('/registro', usuario.registrarUsuario); //nos permite registrar un usuario comprobando que no exista previamente



// ES UN METODO CUALQUIERA PERO ES PARTE DEL EJERCICIO 89
router.post('/login', usuario.iniciarSesion); //nos permite iniciar sesión
// ------------------------------------------------------




router.get('/nombre/:email', usuario.obtenerUsuario2); 






module.exports = router;