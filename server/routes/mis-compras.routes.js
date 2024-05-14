const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');


//ejercicio 79 --------------------------------------
router.get('/', misComprasController.obtenerCompras);




router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);

module.exports=router;