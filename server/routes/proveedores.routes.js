const express = require('express');
const router = express.Router();

const proveedor = require('../controllers/proveedores.controller');

router.post('/',proveedor.darAlta);

module.exports = router;