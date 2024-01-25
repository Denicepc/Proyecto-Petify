const express= require('express');
const router= express.Router();

const carritoController=require('../controllers/carrito.controller');

router.get('/:email', carritoController.obtenerCarrito);
router.post('/agregar', carritoController.agregarAlCarrito);
router.put('/restar', carritoController.restarProducto);
router.put('/sumar', carritoController.sumarProducto);
router.delete('/eliminar', carritoController.eliminarDelCarrito); //eliminamos un unico producto
router.delete('/:email', carritoController.vaciarCarrito);


module.exports=router;
