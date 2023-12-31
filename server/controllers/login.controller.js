// En el controlador de autenticación (authController.js)
const Usuario = require('../models/usuario'); // Importa el modelo de Usuario

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca al usuario en la base de datos por su email
    const user = await Usuario.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Verifica si la contraseña coincide 
    if (user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Si las credenciales son correctas, enviar un mensaje de éxito
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      nombreCompleto: user.nombreCompleto,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};
