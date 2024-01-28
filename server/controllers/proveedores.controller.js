const proveedores = require('../models/proveedores');
const proveedoresController = {};

proveedoresController.darAlta = async(req,res) =>{
    const proveedor= new proveedores({
        nombreProveedor: req.body.nombreProveedor, 
        ciudad: req.body.ciudad,
        pais: req.body.pais,
        });

    await proveedor.save();
}


module.exports = proveedoresController;