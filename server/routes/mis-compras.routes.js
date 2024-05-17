const express= require('express');
const router= express.Router();
const misComprasController=require('../controllers/mis-compras.controller');

//router.get('/', misComprasController.obtenerCompras);
router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);




// Método para obtener la cantidad del producto
router.get('/contarproducto', misComprasController.contarComprasProducto);






module.exports=router;