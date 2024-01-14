const express= require('express');
const router= express.Router();

const carritoController=require('../controllers/carrito.controller');

router.get('/:email', carritoController.obtenerCarrito);
router.post('/agregar/', carritoController.agregarAlCarrito);
router.delete('/eliminar/:nombreProd', carritoController.eliminarDelCarrito);
router.delete('/vaciar', carritoController.vaciarCarrito);

module.exports=router;
