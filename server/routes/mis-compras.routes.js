const express= require('express');
const router= express.Router();
const misComprasController=require('../controllers/mis-compras.controller');



//router.get('/', misComprasController.obtenerCompras);
router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);




//EJERCICIO 38 -------------------------
router.get('/cliente-con-mas-pedidos', misComprasController.clienteConMasPedidos);
//--------------------------------------





module.exports=router;