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

        //sino existe lo creamos
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
    }catch(error) {
        res.json({status: 'Error al guardar el pienso'});
    }

};


piensoController.getPienso= async(req, res)=>{

    const piensoo= await pienso.findById(req.params.id);
    res.json(piensoo);

};

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
            peso:req.body.peso,
            edad:req.body.edad,
            sabor: req.body.sabor};

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


    /*FILTROS METODO PARA CAMBIAR PIENSOS (METODO DE ABAJO)
    - piensoController.getPiensosPorTipo --> módulo que agrupa varios controladores relacionados con los "piensos" en tu aplicación.
    - async (req, res) => --> async: puede realizar operaciones asíncronas, como solicitudes a una base de datos, y esperar a que estas operaciones se completen.
                         --> (req, res) --> req (objeto que recibe la solicitud)  res (objeto de respuesta, responde)
    - req.params.tipoAnimal --> extrae el parámetro tipoAnimal de la URL de la solicitud. Por ejemplo, si la ruta es /api/piensos/tipo/Perro, tipoAnimal será "Perro". Esto permite que la función sepa qué tipo de pienso está solicitando el cliente.
    - await pienso.find({ tipoAnimal: tipoAnimal }) --> Aquí es donde se hace la consulta a la base de datos MongoDB para encontrar todos los documentos en la colección pienso que coinciden con el tipoAnimal especificado.
    - res.json(piensosFiltrados) --> Si la consulta es exitosa y se encuentran piensos que coinciden con el criterio, estos se envían de vuelta al cliente en formato JSON

    EN RESUMEN:
    - Espera solicitudes GET para una URL específica y devuelve una lista de piensos filtrados según el tipo de animal.
    */  

    piensoController.getPiensosPorTipo = async (req, res) => {
        try {
          const tipoAnimal = req.params.tipoAnimal;
          const piensosFiltrados = await pienso.find({ tipoAnimal: tipoAnimal });
          res.json(piensosFiltrados);
        } catch (error) {
          res.status(500).send(error); //que te capture el error
        }
    };


    //POR PRECIO
    piensoController.getPiensosPorPrecio = async (req, res) => {
        try {
            const rango = req.params.rangoPrecio.split('-');
            const minPrecio = parseInt(rango[0]);
            const maxPrecio = parseInt(rango[1]);
    
            const piensosFiltrados = await pienso.find({
                precio: { $gte: minPrecio, $lte: maxPrecio }
            });
            res.json(piensosFiltrados);
        } catch (error) {
            res.status(500).send(error);
        }
    };


    //POR PESO
    piensoController.getPiensosPorPeso = async (req, res) => {
        try {
            const rango = req.params.rangoPeso.split('-');
            const minPeso = parseInt(rango[0]);
            const maxPeso = parseInt(rango[1]);

            const piensosFiltrados = await pienso.find({
                peso: { $gte: minPeso, $lte: maxPeso }
            });
            res.json(piensosFiltrados);
        } catch (error) {
            res.status(500).send(error);
        }
    };


    module.exports=piensoController;
    