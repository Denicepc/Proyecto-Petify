const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');

//router.get('/', misComprasController.obtenerCompras);
router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);






//72) Nombre del cliente que más pedidos ha hecho y total de productos entre todas sus compras.
router.get('/clienteMasPedidos', misComprasController);
//-----------------------------------------------------------------------------------------






module.exports=router;