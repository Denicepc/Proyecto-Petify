const express= require('express');
const router= express.Router();
const misComprasController=require('../controllers/mis-compras.controller');



//router.get('/', misComprasController.obtenerCompras);
router.post('/', misComprasController.crearCompra);



// ejercicio 48 --------------------------------------------------
router.get('/usuario', misComprasController.obtenerComprasUsuario);
// ---------------------------------------------------------------



module.exports=router;