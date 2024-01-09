const express= require('express');
const router= express.Router();

const pienso=require('../controllers/pienso.controller');

router.get('/', pienso.getPiensos);
router.post('/', pienso.crearPienso);
router.get('/:id:', pienso.getPienso);
router.put('/:id', pienso.editarPienso);
router.delete('/:id', pienso.eliminarPienso);


//FILTROS RUTA PARA DEFINIR EL TIPO DE PIENSOS
router.get('/tipo/:tipoAnimal', pienso.getPiensosPorTipo); //la ruta donde vamos a querer buscar el tipo de piensos que queremos mostrar (si es para gatos... para perros...)


//FILTROS RUTA PARA EL PRECIO
router.get('/precio/:rangoPrecio', pienso.getPiensosPorPrecio);


//FILTROS RUTA PARA EL PESO
router.get('/peso/:rangoPeso', pienso.getPiensosPorPeso);


module.exports=router;
