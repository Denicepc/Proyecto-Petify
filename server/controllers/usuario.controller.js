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
        password: req.body.password,
        rol: req.body.rol
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
        password: req.body.password,
        rol: req.body.rol,
    };
    await usuario.findByIdAndUpdate(id,{$set: user}, {new: true}); //con new si quiere actualizar un dato que quiere actualizar y no existe, lo va a crear
    res.json({status: 'Usuario actualizado'});
};

usuarioController.eliminarUsuario = async (req,res) => {
    await usuario.findByIdAndRemove(req.params.id); //cuidado puede funcionar tambien findByIdDelete
    res.json({status: 'Usuario eliminado'});
};

//Registro del usuario
usuarioController.registrarUsuario = async (req, res) => {
    try {
        const { email } = req.body;
        const existeUsuario = await usuario.findOne({ email });

        if (existeUsuario) {    
            return res.json({status: 'El usuario ya existe'});
        }
        const user = new usuario({
            nombreCompleto: req.body.nombreCompleto,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            email: req.body.email,
            password: req.body.password,
            rol: req.body.rol
        });
        await user.save();

        res.json({status: 'Usuario registrado correctamente'});

    } catch (error) {
        res.json({status: 'Error al registrar el usuario'});
    }
};

// Inicio de sesión
usuarioController.iniciarSesion = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usuario.findOne({ email });

        if (!user || user.password !== password) { //si el usuario o la contraseña no coinciden entonces no existe
            return  res.json({status: 'Datos incorrectos al iniciar sesión'});
        }

        res.json({status: 'Inicio de sesión correcto', nombreCompleto: user.nombreCompleto,});
    } catch (error) {
        res.json({status: 'Error al inciiar sesión'});
    }
};


module.exports = usuarioController;