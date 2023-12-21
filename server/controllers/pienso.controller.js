const pienso=require("../models/pienso");
const piensoController= {};

piensoController.getPiensos=async(req, res)=>{

    const piensos=await pienso.find();
    res.json(piensos);

};

piensoController.crearPienso = async(req, res)=>{

    const piensoo= new pienso({
    imagen: req.body.imagen,
    nombre: req.body.nombre, 
    tipoAnimal: req.body.tipoAnimal,
    marca: req.body.marca,
    precio:req.body.precio,
    stock : req.body.stock,
    descripcion: req.body.descripcion,
    peso:req.body.peso,
    edad:req.body.edad,
    sabor: req.body.sabor,
    });

    await piensoo.save();
    res.json({
        'status': 'Pienso guardado'
    });

};


piensoController.getPienso= async(req, res)=>{

    const piensoo= await pienso.findById(req.params.id);
    res.json(piensoo);

};


piensoController.editarPienso= async(req, res)=>{
     const {id} = req.params;
     const piensoo= {
        imagen: req.body.imagen,
        nombre: req.body.nombre, 
        tipoAnimal: req.body.tipoAnimal,
        marca: req.body.marca,
        precio:req.body.precio,
        stock : req.body.stock,
        descripcion: req.body.descripcion,
        peso:req.body.peso,
        edad:req.body.edad,
        sabor: req.body.sabor};

        await pienso.findByIdAndUpdate(id, {$set: piensoo}, {new: true});
        res.json({status: 'Pienso actualizado'});
    };


    piensoController.eliminarPienso= async(req, res)=>{
    await pienso.findByIdAndDelete(req.params.id);
    res.json({status: 'Pienso eliminado'});
    };

    module.exports=piensoController;