const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');

//router.get('/', misComprasController.obtenerCompras);
router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);






//EJERCICO 15 ----------------------------------------------------------
router.get('/producto/numero-compras', misComprasController.obtenerNumeroProductosUsuario);
//----------------------------------------------------------------------





module.exports=router;