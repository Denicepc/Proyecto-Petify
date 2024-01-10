const express= require('express');
const router= express.Router();

const carritoController=require('../controllers/carrito.controller');

router.get('/obtener/:idUsuario', carritoController.obtenerCarrito);
router.post('/agregar', carritoController.agregarAlCarrito);
router.delete('/eliminar/:idProducto', carritoController.eliminarDelCarrito);
router.delete('/vaciar', carritoController.vaciarCarrito);

module.exports=router;
