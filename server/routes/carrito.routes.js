const express= require('express');
const router= express.Router();
const carritoController=require('../controllers/carrito.controller');

router.get('/:email', carritoController.obtenerCarrito); //obtiene el carrito del usuario con el que se ha logado
router.post('/agregar', carritoController.agregarAlCarrito); //agrega el producto al carrito
router.put('/restar', carritoController.restarProducto); //resta el producto del stock
router.put('/sumar', carritoController.sumarProducto); //suma el producto del stock
router.delete('/eliminar', carritoController.eliminarDelCarrito); //eliminamos un unico producto
router.delete('/:email', carritoController.vaciarCarrito);

module.exports=router;
