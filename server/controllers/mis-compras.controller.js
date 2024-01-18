const misCompras= require("../models/mis-compras");
const misComprasController= {};

misComprasController.obtenerCompras = async (req, res) => {
  try {
    const compras = await misCompras.find();
    res.json(compras);
  } catch (error) {
    res.json({status: 'Error al obtener las compras', error});
  }
};

misComprasController.obtenerComprasUsuario = async (req, res) => {
    const { emailUsuario } = req.query;
  
    try {
        //Buscamos las compras de ese usuario
      const compras = await misCompras.find({ emailUsuario });
      res.json(compras);
    } catch (error) {
      res.json({ status: 'Error al obtener las compras', error });
    }
  };

misComprasController.crearCompra = async (req, res) => {
  try {
    const carritoEnviado = req.body;

    //conseguimos el ultimo numero de pedido
    const ultimoPedido = await misCompras.findOne({}, {}, { sort: { 'numPedido': -1 } });
    //lo mismo para el id de compra
    const ultimoIdCompra = await misCompras.findOne({}, {}, { sort: { 'productos.idCompra': -1 } });

    //le sumamos uno a ese pedido y si no existe ninguno le damos el valor 1 porque seria el primer pedido de la base de datos
    const siguienteNumPedido = ultimoPedido ? ultimoPedido.numPedido + 1 : 1;
    //lo mismo para el id de compra
    const siguienteIdCompra = ultimoIdCompra ? ultimoIdCompra.productos[0].idCompra + 1 : 1;

    //Adaptamos la estructura de los productos del carrito a la de mis compras
    const productosAdaptados = carritoEnviado.productos.map((producto, index)  => { //map mapea cada elemento del array de productos y lo transforma a la nueva estructura
        return {                                                           //devuelve el array modificado de productos
          idCompra: siguienteIdCompra + index + 1, //le sumamos la posicion de cada productos para que siempre sea +1 ej: si el idCompra es 5 y el producto esta en la posicion 1 seria el idCompra 6
          nombreProd: producto.nombreProd,
          cantidad: producto.cantidad,
          precio: producto.precio,
          totalProd: (producto.cantidad * producto.precio).toFixed(2)
        };
      });
  
      const nuevaCompra = new misCompras({
        emailUsuario: carritoEnviado.emailUsuario,
        numPedido: siguienteNumPedido, 
        productos: productosAdaptados,
        total: carritoEnviado.total.toFixed(2)
      });
    const compraGuardada = await nuevaCompra.save();
    res.json(compraGuardada);
  } catch (error) {
    res.json({status: 'Error al crear la compra ', error});
  }
};

module.exports = misComprasController;