//rutas de los usuarios

const express = require('express');
const router = express.Router(); //devuelve un objeto

const usuario = require('../controllers/usuario.controller');

router.get('/', usuario.getUsuarios); //oobtiene muchos usuarios
router.get('/:id', usuario.getUsuario); //obtiene un empleado en especifico
router.put('/:id', usuario.editarUsuario); //nos permite editar
router.delete('/:id', usuario.eliminarUsuario); //nos permite eliminar el usuario
router.post('/registro', usuario.registrarUsuario); //nos permite registrar un usuario comprobando que no exista previamente
router.post('/login', usuario.iniciarSesion); //nos permite iniciar sesión

module.exports = router;