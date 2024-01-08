const carrito = require('../models/carrito');
const carritoController = {};

carritoController.obtenerCarrito = async (req, res) => {
    try {
        const carritoActual = await carrito.findOne(); // Obtener el carrito actual

        if (!carritoActual) {
            return res.json({ status: 'No hay productos en el carrito' });
        }

        res.json({ status: 'Carrito obtenido correctamente', carrito: carritoActual });
    } catch (error) {
        res.json({ status: 'Error al obtener el carrito', error: error.message });
    }
};

carritoController.agregarAlCarrito = async (req, res) => {
   try{
        const { idProducto, cantidad, precio } = req.body;
        
        //buscamos si existe un carrito
        let existeCarrito = await carrito.findOne();

        //si no existe creamos uno nuevo
        if (!existeCarrito) {
            existeCarrito = new carrito({
                productos: [],
                total: 0
            });
        }   
        
        //miramos si el producto está repetido en el carrito
        const productoRepetido = existeCarrito.productos.find(producto => producto.idProducto.toString() === idProducto);

        if (productoRepetido) {
            // Si es repetido aumenta la cantidad y el precio total
            productoRepetido.cantidad += cantidad;
            existeCarrito.total += cantidad * precio;
        } else {
            //agregamos el producto nuevo
            existeCarrito.productos.push({
                IdProducto,
                cantidad,
                precio
            });
            existeCarrito.total += cantidad * precio;
        }

        // Guardamos el carrito
        await existeCarrito.save();

        res.json({ status: 'Producto agregado al carrito', carrito: existeCarrito });
    } catch (error) {
        res.json({ status: 'Error al agregar producto al carrito', error: error.message });
    }
};
  
carritoController.eliminarDelCarrito = async (req, res) => {
    try {
        const { idProducto } = req.params;

        //buscamos si hay carrito
        let existeCarrito = await carrito.findOne();

        if (!existeCarrito) {
            return res.json({ status: 'No hay productos en el carrito' });
        }

        //buscamos la posicion del producto en el array
        const indexProducto = existeCarrito.productos.findIndex(producto => producto.idProducto.toString() === idProducto);

        if (indexProducto === -1) { //si es -1 no existe en el carrito
            return res.json({ status: 'Producto no encontrado en el carrito' });
        }

        //conseguimos el precio y la cantidad del producto 
        const { precio, cantidad } = existeCarrito.productos[indexProducto];
        existeCarrito.total -= precio * cantidad; //calculamos el total, restandole el total del producto eliminado

        //elimina el producto del array
        existeCarrito.productos.splice(indexProducto, 1);

        //guarda el carrito actualizado
        await existeCarrito.save();

        res.json({ status: 'Producto eliminado del carrito', carrito: existeCarrito });
    } catch (error) {
        res.json({ status: 'Error al eliminar producto del carrito', error: error.message });
    }
};

carritoController.vaciarCarrito = async (req, res) => {
    try {
        // Buscamos si hay carrito
        let existeCarrito = await carrito.findOne();

        if (!existeCarrito) {
            return res.json({ status: 'No hay productos en el carrito' });
        }

        // Reseteamos el array de productos y el total del carrito
        existeCarrito.productos = [];
        existeCarrito.total = 0;

        // Guardamos el carrito actualizado
        await existeCarrito.save();

        res.json({ status: 'Todos los productos han sido eliminados del carrito', carrito: existeCarrito });
    } catch (error) {
        res.json({ status: 'Error al eliminar todos los productos del carrito', error: error.message });
    }
};


module.exports = carritoController;