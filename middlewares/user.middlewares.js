const bcryptjs = require("bcryptjs");

// model
const User = require("../models/user.models");

// helper
const { getRoles } = require("../helpers/get_roles");

// functions

const verifyEmailExistence = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res.json({
      msg: "Ya existe un usuario con ese email",
    });
  }

  next();
};

// Verifica que la contraseña pasada por el usuario corresponda con el usuario de la bd
const verifyPasswordInUser = async (req, res, next) => {
  let { password, newpassword } = req.body;
  const { id } = req.params;

  const user = await User.findOne({ id });

  if (user) {
    const salt = bcryptjs.genSaltSync();

    password = bcryptjs.hashSync(password, salt);
    console.log(password);
    console.log(user.password);

    if (password === user.password) {
      password = bcryptjs.hashSync(newpassword, salt);

      await User.findByIdAndUpdate(id, { password }, { new: true });

      return res.json({
        msg: "La contraseña se ah actualizado",
      });
    }
  }

  return res.json({
    msg: "Ocurrio un error por favor vuelva a intentarlo mas tarde",
  });
};

// Valida que el usuario que realiza una peticion sea un usuario activo
const verificarActivo = (req, res, next) => {
  const { active } = req.user;

  if (!active) {
    return res.json({
      msg: "No tiene acceso porque usted no existe en el sistema",
    });
  }
  next();
};

// Verifica que el rol se encuentre en los roles de la base de datos
const verifyInRoles = async (req, res, next) => {
  const { rol } = req.body;
  const roles = await getRoles();

  if (!roles.includes(rol)) {
    return res.json({ msg: "El rol debe ser uno existente" });
  }

  next();
};

module.exports = {
  verifyEmailExistence,
  verifyInRoles,
  verifyPasswordInUser,
  verificarActivo,
};
