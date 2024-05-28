    const usuario = require('../models/usuario');
    const carrito = require('../models/carrito'); //SUPER IMPORTANTE METER ESTA RUTA
    const usuarioController = {};


    //CREAS LOS PRODUCTOS QUE VAS A METER
    const productosIniciales = [
        {nombreProd: 'Indoor Cat', cantidad: 3, precio: 10, stock: 13},
        {nombreProd: 'Bountifull catch', cantidad: 2, precio: 15, stock: 12},
        {nombreProd: 'Wild Prairie', cantidad: 1, precio: 17, stock: 15}
    ];


    //METODO PARA CREAR UN CARRITO VACIO
    const obtenerCarritoUsuario = async (emailUsuario) => {
        const emailUsuarioFinal = emailUsuario ? emailUsuario : "null";
        
        let carritoActual = await carrito.findOne({ emailUsuario: emailUsuarioFinal });

        //Si no encontramos un carrito para el usuario actual o usuario null, creamos uno nuevo
        if (!carritoActual) {
            carritoActual = new carrito({
                emailUsuario: emailUsuarioFinal,
                productos: [],
                total: 0,
            });
            await carritoActual.save();
        }
        return carritoActual;
    }


    //INICIO DE SESION
    usuarioController.iniciarSesion = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await usuario.findOne({ email });

            if (!user || user.password !== password) { //si el usuario o la contraseña no coinciden entonces no existe
                return  res.json({status: 'Datos incorrectos al iniciar sesión'});
            }


            //EMPEZAMOS EL CAMBIO DE CODIGO AQUI
            let carritoUsuario = await obtenerCarritoUsuario(email);
            if(carritoUsuario.productos.length === 0){ //si el carrito no tiene productos... que es el caso
                productosIniciales.forEach(producto =>{
                    carritoUsuario.productos.push(producto);
                    carritoUsuario.total += producto.cantidad * producto.precio;
                });
                await carritoUsuario.save();
            }
            //FIN CAMBIO DE CODIGO



            res.json({status: 'Inicio de sesión correcto', usuario: user});
        } catch (error) {
            res.json({status: 'Error al inciar sesión'});
        }
    };



















//definimos las consultas a la base de datos
usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await usuario.find(); //busca todos los usuarios que tengo en la base de datos
    //cuando termine con el await lo metemos en la constante usuarios
    res.json(usuarios); //respondemos con los usuarios
    //http://localhost:3000/api/usuarios/ en el navegador
};

usuarioController.getUsuario = async (req,res) => {
    const user = await usuario.findById(req.params.id); //consigue el id atras de req.params.id
    res.json(user);
};

usuarioController.editarUsuario = async (req,res) => {
    try {
        const {id} = req.params;
        //buscamos si existe el usuario
        const usuarioActual = await usuario.findById(id);

        //comprobamos que al editar no se repitan los emails en otro usuario diferente al actual
        const {email} = req.body;
        const existeUsuario = await usuario.findOne({
            email,
            _id: { $ne: usuarioActual._id} //excluimos el correo del usuario actual, para asegurarnos que otro usuario no esta usando su correo
            // ne significa not equal
         });

        if (existeUsuario) {    
            return res.json({status: 'El usuario ya existe'});
        }

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
    }catch(error) {
        res.json({status: 'Error al editar el usuario'});
    }
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
        //crea un nuevo usuario
        const user = new usuario({
            nombreCompleto: req.body.nombreCompleto,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            email: req.body.email,
            password: req.body.password,
            rol: req.body.rol
        });
        await user.save();

        res.json({status: 'Usuario registrado correctamente', usuario: user});

    } catch (error) {
        res.json({status: 'Error al registrar el usuario'});
    }
};




module.exports = usuarioController;