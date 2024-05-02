const express= require('express');
const router= express.Router();

const misComprasController=require('../controllers/mis-compras.controller');

//router.get('/', misComprasController.obtenerCompras);
router.get('/usuario', misComprasController.obtenerComprasUsuario);
router.post('/', misComprasController.crearCompra);





//EJERCICIO 19 
//Asegúrate de añadir la ruta para este controlador en mis-compras.routes.js
router.get('/total/:nombreProducto', misComprasController.getTotalProductos);






module.exports=router;