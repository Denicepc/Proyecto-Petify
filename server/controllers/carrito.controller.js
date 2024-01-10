const carrito = require('../models/carrito');
const carritoController = {};

const obtenerCarritoUsuario = async (usuarioId) => {
    //buscamos si el usuario logeado o no tiene un carrito previamente
    if (!usuarioId) {
        return await carrito.findOne({ idUsuario: null });
    } else {
        return await carrito.findOne({ idUsuario: usuarioId });
    }
};

//metodo para que cuando un usuario inicie sesion aparezca su carrito
carritoController.obtenerCarrito = async (req, res) => {
    try {
        const usuarioActual = req.params.idUsuario; // Supongamos que se pasa un userId en la solicitud

        let carritoActual = await obtenerCarritoUsuario(usuarioActual); //buscamos si el usuario logeado o no tiene un carrito

        if (!carritoActual) {
            carritoActual = new carrito({
                idUsuario: usuarioActual,
                productos: [],
                total: 0
            });
            await carritoActual.save();
            return res.json({ status: 'No hay carrito para este usuario', carrito: carritoActual });
        }

        res.json({ status: 'Carrito obtenido correctamente', carrito: carritoActual });
    } catch (error) {
        res.json({ status: 'Error al obtener el carrito', error: error.message });
    }
};


carritoController.agregarAlCarrito = async (req, res) => {
    try {
        const { idProducto,nombre, cantidad, precio } = req.body;
        const usuarioActual = req.body;

        //buscamos el carrito del usuario
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        if (!carritoUsuario) { //si no tiene carrito creamos uno nuevo vacio
            carritoUsuario = new carrito({
                idUsuario: usuarioActual ? usuarioActual._id : null,
                productos: [],
                total: 0
            });
        }

        //buscamos la posicion del producto dentro del array
        const indexProducto = carritoUsuario.productos.findIndex(producto => producto.idProducto.toString() === idProducto);

        if (indexProducto !== -1) { //si la posicion es distinta de -1 significa que existe en el array
            carritoUsuario.productos[indexProducto].cantidad += cantidad; //por lo tanto aumentamos la cantidad
        } else {
            carritoUsuario.productos.push({ idProducto, nombre, cantidad, precio }); //si no existe lo agregamos al array
        }

        carritoUsuario.total += cantidad * precio; //calculamos el precio total

        await carritoUsuario.save(); //actualizamos el carrito

        res.json({ status: 'Producto agregado al carrito', carrito: carritoUsuario });
    } catch (error) {
        res.json({ status: 'Error al agregar producto al carrito', error: error.message });
    }
};

carritoController.eliminarDelCarrito = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const usuarioActual = req.body;

        //buscamos el carrito del usuario
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        //si existe carrito comprobamos si contiene productos para poder eliminar
        if (!carritoUsuario || !carritoUsuario.productos) {
            return res.json({ status: 'No hay productos en el carrito' });
        }

        //conseguimos la posicion del producto en el array
        const indexProducto = carritoUsuario.productos.findIndex(producto => producto.idProducto.toString() === idProducto);

        if (indexProducto === -1) { //si es -1, el producto no existe en el carrito y seria un fallo
            return res.json({ status: 'Producto no encontrado en el carrito' });
        }

        //guardamos el precio y la cantidad del producto para descontarlo del total
        const { precio, cantidad } = carritoUsuario.productos[indexProducto];
        carritoUsuario.total -= precio * cantidad;
        carritoUsuario.productos.splice(indexProducto, 1); //borramos el producto del array

        await carritoUsuario.save(); //actualizamos el carrito

        res.json({ status: 'Producto eliminado del carrito', carrito: carritoUsuario });
    } catch (error) {
        res.json({ status: 'Error al eliminar producto del carrito', error: error.message });
    }
};

carritoController.vaciarCarrito = async (req, res) => {
    try {
        const usuarioActual = req.body;
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        if (!carritoUsuario) {
            return res.json({ status: 'No hay productos en el carrito' });
        }

        carritoUsuario.productos = [];
        carritoUsuario.total = 0;

        await carritoUsuario.save();

        res.json({ status: 'Todos los productos han sido eliminados del carrito', carrito: carritoUsuario });
    } catch (error) {
        res.json({ status: 'Error al eliminar todos los productos del carrito', error: error.message });
    }
};

module.exports = carritoController;
