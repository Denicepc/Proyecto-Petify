const pienso=require("../models/pienso");
const piensoController= {};

piensoController.getPiensos=async(req, res)=>{

    const piensos=await pienso.find();
    res.json(piensos);

};

piensoController.crearPienso = async(req, res)=>{
    try{
        const {nombre} = req.body;
        const existePienso = await pienso.findOne({nombre});

        if(existePienso){
            return res.json({status: 'El nombre del pienso no se puede repetir'});
        }

        //si no existe lo creamos
        const piensoo= new pienso({
        imagen: req.body.imagen,
        nombre: req.body.nombre, 
        tipoAnimal: req.body.tipoAnimal,
        marca: req.body.marca,
        precio:req.body.precio,
        stock : req.body.stock,
        descripcion: req.body.descripcion,
        peso:req.body.peso,
        });

        await piensoo.save();
        res.json({
            'status': 'Pienso guardado'
        });
    }catch(error) {
        res.json({status: 'Error al guardar el pienso'});
    }

};


piensoController.getPienso= async(req, res)=>{
    const piensoo= await pienso.findById(req.params.id);
    res.json(piensoo);
};


//METODO PARA EDITAR EL PIENSO
piensoController.editarPienso= async(req, res)=>{
    try{
        const {id} = req.params;
        const piensoActual = await pienso.findById(id);

        const {nombre} = req.body;
        const existePienso = await pienso.findOne({
            nombre,
            _id: { $ne: piensoActual._id} //no buscamos en el pienso que estamos editando
        });
    
        if(existePienso){
            return res.json({status: 'El nombre del pienso no se puede repetir'});
        }

        //editamos el pienso si el nombre no está repetido
        const piensoo= {
            imagen: req.body.imagen,
            nombre: req.body.nombre, 
            tipoAnimal: req.body.tipoAnimal,
            marca: req.body.marca,
            precio:req.body.precio,
            stock : req.body.stock,
            descripcion: req.body.descripcion,
            peso:req.body.peso};

            await pienso.findByIdAndUpdate(id, {$set: piensoo}, {new: true});
            res.json({status: 'Pienso actualizado'});

    }catch(error) {
        res.json({status: 'Error al editar el pienso'});
    }
};

    piensoController.eliminarPienso= async(req, res)=>{
    await pienso.findByIdAndDelete(req.params.id);
    res.json({status: 'Pienso eliminado'});
    };


    /*----------------------------------------------------------------------*/  


    piensoController.getPiensosPorTipo = async (req, res) => {
        try {
          const tipoAnimal = req.params.tipoAnimal;
          const piensosFiltrados = await pienso.find({ tipoAnimal: tipoAnimal });
          res.json(piensosFiltrados);
        } catch (error) {
          res.status(500).send(error); //que te capture el error
        }
    };


    //POR PESO, PRECIO Y EDAD (JUNIOR, SENIOR Y ADULTO)
    piensoController.getPiensos = async (req, res) => {
        try {

            let query = {};
            
            if (req.query.precio) {
                const rangoPrecio = req.query.precio.split('-');
                query.precio = { $gte: parseInt(rangoPrecio[0]), $lte: parseInt(rangoPrecio[1]) };
            }
    
            if (req.query.peso) {
                const rangoPeso = req.query.peso.split('-');
                query.peso = { $gte: parseInt(rangoPeso[0]), $lte: parseInt(rangoPeso[1]) };
            }

    
            const piensos = await pienso.find(query);
            res.json(piensos);
        } catch (error) {
            res.status(500).send(error);
        }
    };
    

    module.exports=piensoController;