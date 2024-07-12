const express = require('express'); // importa el modulo express
const router = express.Router(); // se utiliza para definir rutas
const pienso = require('../controllers/pienso.controller'); // le pasamos el controller de pienso, para llamar a los metodos que hay en el.

//ruta principal que acepta parámetros de consulta opcionales para filtros
router.get('/', pienso.getPiensos); 

//ruta para filtrar piensos por tipo de animal
router.get('/tipo/:tipoAnimal', pienso.getPiensosPorTipo); // obtener por tipo de Animal
router.post('/', pienso.crearPienso); // crear / añadir
router.get('/:id', pienso.getPienso); // buscar por id
router.put('/:id', pienso.editarPienso); // modificar
router.delete('/:id', pienso.eliminarPienso); // borrar por ID

module.exports = router;