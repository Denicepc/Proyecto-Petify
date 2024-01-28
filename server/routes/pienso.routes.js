const express = require('express');
const router = express.Router();

const pienso = require('../controllers/pienso.controller');

//ruta principal que acepta parámetros de consulta opcionales para filtros
router.get('/', pienso.getPiensos); 

//ruta para filtrar piensos por tipo de animal
router.get('/tipo/:tipoAnimal', pienso.getPiensosPorTipo);


router.post('/', pienso.crearPienso);
router.get('/:id', pienso.getPienso);
router.put('/:id', pienso.editarPienso);
router.delete('/:id', pienso.eliminarPienso);

module.exports = router;