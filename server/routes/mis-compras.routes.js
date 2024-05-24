const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');

router.get('/', misComprasController.obtenerCompras);


// ej 8
router.get('/usuario', misComprasController.obtenerComprasUsuario);





router.post('/', misComprasController.crearCompra);
router.delete('/borrarProducto', misComprasController.eliminarProductoCompras);
router.get('/ejercicio5/:email', misComprasController.conseguirClienteComprado);

module.exports=router;