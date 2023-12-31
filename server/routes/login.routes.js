const express = require('express');
const router = express.Router();
const autenticacion = require('../controllers/login.controller');

// Ruta para el login
router.post('/', autenticacion.login);

module.exports = router;
