const jwt = require("jsonwebtoken");
const { response, request } = require("express");
const User = require("../models/user.models");

const validar_jwt = async (req = request, res = response, next) => {
  const token = req.header("auth-token");

  // Verificar existencia del token
  if (!token) {
    return res.status(401).json({
      msg: "Error de autenticacion", //'No existe el token'
    });
  }

  // Verificar token
  try {
    const { id } = jwt.verify(token, process.env.SECRET);
    // console.log("entrando")

    if (!id) {
      console.log(id);
      return res.status(401).json({
        msg: "No existe el id",
      });
    }

    // verificar existencia del id en la base de datos
    const user = await User.findOne({ id });

    // valida el usuario
    if (!user) {
      return res.status(401).json({
        msg: "No existe el usuario",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Error de token",
    });
    // throw error;
  }
};

module.exports = { validar_jwt };
