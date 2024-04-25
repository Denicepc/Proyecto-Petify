const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');

//router.get('/', misComprasController.obtenerCompras);
router.get('/usuario', misComprasController.obtenerComprasUsuario); //con esta ruta obtienes todas las compras del Usuario
router.post('/', misComprasController.crearCompra);

module.exports=router;