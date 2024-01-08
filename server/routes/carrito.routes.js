const express= require('express');
const router= express.Router();

const pienso=require('../controllers/carrito.controller');

router.get('/obtener', carritoController.obtenerCarrito);
router.post('/agregar', carritoController.agregarAlCarrito);
router.delete('/eliminar/:productoId', carritoController.eliminarDelCarrito);
router.delete('/vaciar', carritoController.eliminarTodosDelCarrito);

module.exports=router;
