
const express= require('express');
const router= express.Router();

const pienso=require('../controllers/pienso.controller');

router.get('/', pienso.getPiensos);
router.post('/', pienso.crearPienso);
router.get('/:id:', pienso.getPienso);
router.put('/:id', pienso.editarPienso);
router.delete('/:id', pienso.eliminarPienso);


//TEMA FILTROS
router.get('/tipo/:tipoAnimal', pienso.getPiensosPorTipo);

module.exports=router;
