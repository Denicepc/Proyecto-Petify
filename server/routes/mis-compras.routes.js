const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');



//EJERCICIO 16 ------------------------------------- //E
router.get('/', misComprasController.obtenerCompras);
//--------------------------------------------------



router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);



module.exports=router;