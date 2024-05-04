const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');


//router.get('/', misComprasController.obtenerCompras);
router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);



//EJERCICIO 29 -------------------------------------------
//En tus rutas de Express, asegúrate de que la ruta está correctamente definida.
router.get('/clientes-por-categoria/:categoria', misComprasController.clientesPorCategoria);
//--------------------------------------------------------




module.exports=router;