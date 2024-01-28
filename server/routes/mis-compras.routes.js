const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');

router.get('/', misComprasController.obtenerCompras);
//ejercicio 75
router.get('/productoCaro',misComprasController.productoMasCaroComprado);
router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);

module.exports=router;