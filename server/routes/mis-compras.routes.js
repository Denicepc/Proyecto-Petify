const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');

//router.get('/', misComprasController.obtenerCompras);
router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);





// ejercicio categoria -----------------------------------
router.get('/clientes/categoria/:categoria', misComprasController.obtenerClientesPorCategoria);
// -------------------------------------------------------





module.exports=router;