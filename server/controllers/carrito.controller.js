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
            carritoActual.productos = combinarProductos(carritoActual.productos, carritoUsuarioSinSesion.productos);
            carritoActual.total += carritoUsuarioSinSesion.total;
            carritoActual.total = carritoActual.total.toFixed(2);

            // Vaciar el carrito "null"
            carritoUsuarioSinSesion.productos = [];
            carritoUsuarioSinSesion.total = 0;
            await carritoUsuarioSinSesion.save();
            await carritoActual.save();
        }
    }

    return carritoActual;
};

// Función para combinar productos y sumar cantidades en caso de duplicados
const combinarProductos = (productos1, productos2) => {
    const productosCombinados = [...productos1];

    productos2.forEach(producto2 => {
        const indexProducto = productos1.findIndex(producto1 => producto1.nombreProd === producto2.nombreProd);

        if (indexProducto !== -1) {
            // Si el producto ya existe en el carrito, sumar las cantidades
            productosCombinados[indexProducto].cantidad += producto2.cantidad;
        } else {
            // Si el producto no existe, agregarlo al array
            productosCombinados.push(producto2);
        }
    });

    return productosCombinados;
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
        const { nombreProd, cantidad, precio, stock } = req.body;
        const usuarioActual = req.body.emailUsuario;

        //buscamos el carrito del usuario
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        //buscamos la posicion del producto dentro del array
        const indexProducto = carritoUsuario.productos.findIndex(producto => producto.nombreProd === nombreProd);

        /*if (indexProducto !== -1) { //si la posicion es distinta de -1 significa que existe en el array
            carritoUsuario.productos[indexProducto].cantidad += cantidad; //por lo tanto aumentamos la cantidad
        } else {
            carritoUsuario.productos.push({ nombreProd, nombre, cantidad, precio, stock }); //si no existe lo agregamos al array
        }*/

        if (indexProducto !== -1) { // Si la posición es distinta de -1 significa que existe en el array
            // Verificamos si la cantidad a agregar supera el stock disponible
            if (carritoUsuario.productos[indexProducto].cantidad + cantidad > stock) {
                return res.json({ status: 'La cantidad a agregar supera el stock disponible' });
            }

            // Si no supera el stock, aumentamos la cantidad
            carritoUsuario.productos[indexProducto].cantidad += cantidad;
        } else {
            // Si no existe en el carrito, verificamos si la cantidad a agregar supera el stock disponible
            if (cantidad > stock) {
                return res.json({ status: 'La cantidad a agregar supera el stock disponible' });
            }

            // Si no supera el stock, agregamos el producto al array
            carritoUsuario.productos.push({ nombreProd, cantidad, precio, stock });
        }


        carritoUsuario.total += cantidad * precio; //calculamos el precio total
        carritoUsuario.total = carritoUsuario.total.toFixed(2); //redondeamos a 2 decimales

        await carritoUsuario.save(); //actualizamos el carrito

        res.json(carritoUsuario);
    } catch (error) {
        res.json({ status: 'Error al agregar producto al carrito', error: error.message });
    }
};

carritoController.eliminarDelCarrito = async (req, res) => {
    try {
        const { nombreProd, usuarioActual } = req.query;

        //buscamos el carrito del usuario
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        //si existe carrito comprobamos si contiene productos para poder eliminar
        if (!carritoUsuario || !carritoUsuario.productos) {
            return res.json({ status: 'No hay productos en el carrito' });
        }

        //conseguimos la posicion del producto en el array
        const indexProducto = carritoUsuario.productos.findIndex(producto => producto.nombreProd === nombreProd);

        if (indexProducto === -1) { //si es -1, el producto no existe en el carrito y seria un fallo
            return res.json({ status: 'Producto no encontrado en el carrito'});
        }

        //guardamos el precio y la cantidad del producto para descontarlo del total
        const { precio, cantidad } = carritoUsuario.productos[indexProducto];
        carritoUsuario.total -= precio * cantidad;
        carritoUsuario.total = carritoUsuario.total.toFixed(2);
        carritoUsuario.productos.splice(indexProducto, 1); //borramos el producto del array

        await carritoUsuario.save(); //actualizamos el carrito

        res.json(carritoUsuario);
    } catch (error) {
        res.json({ status: 'Error al eliminar producto del carrito', error: error.message });
    }
};

carritoController.restarProducto = async (req, res) => {
    try {
        const { nombreProd, usuarioActual } = req.query;

        //buscamos el carrito del usuario
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        //si existe carrito comprobamos si contiene productos para poder disminuirlo
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
        
        // Verificamos si la cantidad es mayor a 1 antes de restar
        if (cantidad > 1) {
            carritoUsuario.productos[indexProducto].cantidad--; // Restamos una unidad
            carritoUsuario.total -= precio; // Restamos el precio del producto al total
            carritoUsuario.total = carritoUsuario.total.toFixed(2);
        
            // Guardamos el carrito actualizado
            await carritoUsuario.save();
        
            res.json(carritoUsuario);
        } else {
            res.json({ status: 'La cantidad del producto es uno' });
        }       
    } catch (error) {
        res.json({ status: 'Error al eliminar producto del carrito', error: error.message });
    }
};

carritoController.sumarProducto = async (req, res) => {
    try {
        const { nombreProd, usuarioActual } = req.query;

        //buscamos el carrito del usuario
        let carritoUsuario = await obtenerCarritoUsuario(usuarioActual);

        //si existe carrito comprobamos si contiene productos para poder disminuirlo
        if (!carritoUsuario || !carritoUsuario.productos) {
            return res.json({ status: 'No hay productos en el carrito' });
        }

        //conseguimos la posicion del producto en el array
        const indexProducto = carritoUsuario.productos.findIndex(producto => producto.nombreProd === nombreProd);

        if (indexProducto === -1) { //si es -1, el producto no existe en el carrito y seria un fallo
            return res.json({ status: 'Producto no encontrado en el carrito' });
        }

        // Guardamos el precio del producto para descontarlo del total
        const { precio, cantidad, stock } = carritoUsuario.productos[indexProducto];

        // Verificamos si la cantidad a sumar supera el stock disponible
        if (cantidad + 1 > stock) {
            return res.json({ status: 'La cantidad a sumar supera el stock disponible' });
        }
       
        carritoUsuario.productos[indexProducto].cantidad++; // Sumamos una unidad
        carritoUsuario.total += precio; // Sumamos el precio del producto al total
        carritoUsuario.total = carritoUsuario.total.toFixed(2);
       
        // Guardamos el carrito actualizado
        await carritoUsuario.save();
       
         res.json(carritoUsuario);
       /*
        //guardamos el precio del producto para descontarlo del total
        const { precio } = carritoUsuario.productos[indexProducto];
        

        carritoUsuario.productos[indexProducto].cantidad++; // Restamos una unidad
        carritoUsuario.total += precio; // Restamos el precio del producto al total
        carritoUsuario.total = carritoUsuario.total.toFixed(2);
        
        // Guardamos el carrito actualizado
        await carritoUsuario.save();
        
        res.json(carritoUsuario);*/
    } catch (error) {
        res.json({ status: 'Error al eliminar producto del carrito', error: error.message });
    }
};

carritoController.vaciarCarrito = async (req, res) => {
    try {
        const usuarioActual = req.params.email;
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
