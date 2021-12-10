const mongoose = require('mongoose');
require("dotenv").config();

mongoose
    .connect(process.env.URI)
    .then(() => console.log('Conexión establecida a la Base de Datos'))
    .catch(err => console.log("Error al conectar a la Base de Datos"))

module.exports = mongoose;
