const usuario = require('../models/usuario');
const usuarioController = {};

//definimos las consultas a la base de datos
usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await usuario.find(); //busca todos los usuarios que tengo en la base de datos
    //cuando termine con el await lo metemos en la constante usuarios
    res.json(usuarios); //respondemos con los usuarios
    //http://localhost:3000/api/usuarios/ en el navegador
};

usuarioController.crearUsuario = async (req,res) => { //va a recoger los datos del navegador que introduce el usuario en un formulario y crear un usuario
    const user = new usuario({
        nombreCompleto: req.body.nombreCompleto,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        password: req.body.password
    });
    await user.save(); //guarda el usuario
    res.json({
        'status': 'Usuario guardado'
    });
};

usuarioController.getUsuario = async (req,res) => {
    const user = await usuario.findById(req.params.id); //consigue el id atras de req.params.id
    res.json(user);
};

usuarioController.editarUsuario = async (req,res) => {
    const {id} = req.params;
    const user = {
        nombreCompleto: req.body.nombreCompleto,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        password: req.body.password
    };
    await usuario.findByIdAndUpdate(id,{$set: user}, {new: true}); //con new si quiere actualizar un dato que quiere actualizar y no existe, lo va a crear
    res.json({status: 'Usuario actualizado'});
};

usuarioController.eliminarUsuario = async (req,res) => {
    await usuario.findByIdAndRemove(req.params.id); //cuidado puede funcionar tambien findByIdDelete
    res.json({status: 'Usuario eliminado'});
};

module.exports = usuarioController;