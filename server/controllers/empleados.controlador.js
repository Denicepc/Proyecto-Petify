//creamos nuestros métodos, se va a ejecutar uno u otro dependiento de las rutas
const controladorEmpleado = {};
//requerimos el modelo de la base de datos
const empleadosModels = require('../models/empleados');

controladorEmpleado.mostrarEmpleados = async (req,res) => {
    const leerempleados = await empleadosModels.find();
    //el metodo find puede tardar y espera y luego lo guarda en la constante empleados y cuando tenga a todos los empleados res lo envia en formato json al navegador
    res.json(leerempleados);
}



controladorEmpleado.crearEmpleado = async (req,res) => {
   const nuevoempleado = new empleadosModels(req.body);
   await nuevoempleado.save(); //puede tardar en guardar en la base de datos
   res.json(
    'EMPLEADO ALMACENADO'
   )
}

controladorEmpleado.mostrarEmpleado =async (req,res) => {
    const buscarempleado = await empleadosModels.findById(req.params.id);
    res.json(buscarempleado);
}

controladorEmpleado.editarEmpleado = async (req,res) => {
    const {id} = req.params;
    const empleadoaeditar = {
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        salario: req.body.salario
    };
    //el set lo midifica y el ultimo parametro crea uno nuevo en caso de no existir
    await empleadosModels.findByIdAndUpdate(id,{$set: empleadoaeditar}, {new: true});
    res.json("USUARIO ACTUALIZADO");
}

controladorEmpleado.borrarEmpleado = async (req,res) => {
   //no se necesita constante porque se elimina y no se almacena
    await empleadosModels.findByIdAndRemove(req.params.id);
    res.json("USUARIO ELIMINADO");
}

//exportamos el objeto controlador
module.exports = controladorEmpleado;
