const misCompras= require("../models/mis-compras");
const piensos = require("../models/pienso");
const misComprasController= {};





misComprasController.obtenerCompras = async (req, res) => {
  try {
    const compras = await misCompras.find();
    res.json(compras);
  } catch (error) {
    res.json({status: 'Error al obtener las compras', error});
  }
};













//EJERCICIO 17 ----------------------------------------------
misComprasController.obtenerComprasUsuario = async (req, res) => {
  const { emailUsuario } = req.query;

  try {
      const compras = await misCompras.find({ emailUsuario });
      let totalCompras = 0;
      compras.forEach(compra => {
          totalCompras += compra.total;  //asegúrate de que `total` es un número y está correctamente sumado
      });

      //devuelve tanto las compras como el total calculado
      res.json({
          compras: compras,
          totalCompras: totalCompras
      });
  } catch (error) {
      res.status(500).json({ status: 'Error al obtener las compras', error: error.message });
  }
}; //---------------------------------------------------------



















misComprasController.crearCompra = async (req, res) => {
  try {
    const carritoEnviado = req.body;

    //conseguimos el ultimo numero de pedido
    const ultimoPedido = await misCompras.findOne({}, {}, { sort: { 'numPedido': -1 } });
    //lo mismo para el id de compra
    const ultimoIdCompra = await misCompras.findOne({}, {}, { sort: { 'productos.idCompra': -1 } }); //'productos.idCompra': 1 para el primer producto ej

    //le sumamos uno a ese pedido y si no existe ninguno le damos el valor 1 porque seria el primer pedido de la base de datos
    const siguienteNumPedido = ultimoPedido ? ultimoPedido.numPedido + 1 : 1;
    //lo mismo para el id de compra
    const siguienteIdCompra = ultimoIdCompra ? ultimoIdCompra.productos[ultimoIdCompra.productos.length-1].idCompra : 0;

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
      fecha: new Date(),
      productos: productosAdaptados,
      total: carritoEnviado.total.toFixed(2)
      });

    const compraGuardada = await nuevaCompra.save();


    // Después de guardar la compra, actualizamos el stock de piensos
    for (producto of carritoEnviado.productos) {
      const pienso = await piensos.findOne({ nombre: producto.nombreProd });
      if (pienso) {
        pienso.stock -= producto.cantidad;
        if (pienso.stock < 0) {
          return res.json({ status: `stock insuficiente para el producto ${producto.nombreProd}` });
        }
        await pienso.save();
      }
    }

    res.json(compraGuardada);
  } catch (error) {
    res.json({status: 'Error al crear la compra ', error});
  }
};




module.exports = misComprasController;