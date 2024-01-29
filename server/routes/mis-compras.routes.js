const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');

router.get('/', misComprasController.obtenerCompras);
router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);
router.post('/eliminar', misComprasController.eliminarProducto);

module.exports=router;