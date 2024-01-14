const carrito = require('../models/carrito');
const carritoController = {};

const obtenerCarritoUsuario = async (emailUsuario) => {
    const emailUsuarioFinal = emailUsuario ? emailUsuario : "null";
    
    let carritoActual = await carrito.findOne({ emailUsuario: emailUsuarioFinal });

    // Si no encontramos un carrito para el usuario actual o usuario null, creamos uno nuevo
    if (!carritoActual) {
        carritoActual = new carrito({
            emailUsuario: emailUsuarioFinal,
            productos: [],
            total: 0,
        });
        await carritoActual.save();
    }

    // Manejar la transferencia de productos desde el carrito "null"
    if (emailUsuarioFinal !== "null") {
        const carritoUsuarioSinSesion = await carrito.findOne({ emailUsuario: "null" });

        if (carritoUsuarioSinSesion && carritoUsuarioSinSesion.productos.length > 0) {
            // Transferir productos al carrito actual y actualizar el total
            carritoActual.productos = carritoActual.productos.concat(carritoUsuarioSinSesion.productos);
            carritoActual.total += carritoUsuarioSinSesion.total;

            // Vaciar el carrito "null"
            carritoUsuarioSinSesion.productos = [];
            carritoUsuarioSinSesion.total = 0;
            await carritoUsuarioSinSesion.save();
            await carritoActual.save();
        }
    }

    return carritoActual;
};


//metodo para que cuando un usuario inicie sesion aparezca su carrito
carritoController.obtenerCarrito = async (req, res) => {
    try {
        const usuarioActual = req.params.email; // Supongamos que se pasa el email en la solicitud

        let carritoActual = await obtenerCarritoUsuario(usuarioActual); //buscamos si el usuario logeado o no tiene un carrito

        res.json(carritoActual);
    } catch (error) {
        res.json({ status: 'Error al obtener el carrito', error: error.message });
    }
};


carritoController.agregarAlCarrito = async (req, res) => {
    try {
        const { nombreProd,nombre, cantidad, precio, stock } = req.body;
        const usuarioActual = req.body.emailUsuario;

        //buscamos el carrito del usuario
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        //buscamos la posicion del producto dentro del array
        const indexProducto = carritoUsuario.productos.findIndex(producto => producto.nombreProd === nombreProd);

        if (indexProducto !== -1) { //si la posicion es distinta de -1 significa que existe en el array
            carritoUsuario.productos[indexProducto].cantidad += cantidad; //por lo tanto aumentamos la cantidad
        } else {
            carritoUsuario.productos.push({ nombreProd, nombre, cantidad, precio, stock }); //si no existe lo agregamos al array
        }

        carritoUsuario.total += cantidad * precio; //calculamos el precio total

        await carritoUsuario.save(); //actualizamos el carrito

        res.json(carritoUsuario);
    } catch (error) {
        res.json({ status: 'Error al agregar producto al carrito', error: error.message });
    }
};

carritoController.eliminarDelCarrito = async (req, res) => {
    try {
        const { nombreProd } = req.params;
        const usuarioActual = req.body.emailUsuario;

        //buscamos el carrito del usuario
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        //si existe carrito comprobamos si contiene productos para poder eliminar
        if (!carritoUsuario || !carritoUsuario.productos) {
            return res.json({ status: 'No hay productos en el carrito' });
        }

        //conseguimos la posicion del producto en el array
        const indexProducto = carritoUsuario.productos.findIndex(producto => producto.nombreProd === nombreProd);

        if (indexProducto === -1) { //si es -1, el producto no existe en el carrito y seria un fallo
            return res.json({ status: 'Producto no encontrado en el carrito' });
        }

        //guardamos el precio y la cantidad del producto para descontarlo del total
        const { precio, cantidad } = carritoUsuario.productos[indexProducto];
        carritoUsuario.total -= precio * cantidad;
        carritoUsuario.productos.splice(indexProducto, 1); //borramos el producto del array

        await carritoUsuario.save(); //actualizamos el carrito

        res.json(carritoUsuario);
    } catch (error) {
        res.json({ status: 'Error al eliminar producto del carrito', error: error.message });
    }
};

carritoController.vaciarCarrito = async (req, res) => {
    try {
        const usuarioActual = req.body.emailUsuario;
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        if (!carritoUsuario) {
            return res.json({ status: 'No hay productos en el carrito' });
        }

        carritoUsuario.productos = [];
        carritoUsuario.total = 0;

        await carritoUsuario.save();

        res.json(carritoUsuario);
    } catch (error) {
        res.json({ status: 'Error al eliminar todos los productos del carrito', error: error.message });
    }
};

module.exports = carritoController;
