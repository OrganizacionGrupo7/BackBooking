const route = require("express").Router();

// Middlewares
const {
  form_post_middlewares,
  form_update_middlewares,
  form_password_middlewares,
} = require("../middlewares/form-structure.middlewares");

//Controllers
const { loginUser } = require("../controllers/login.controllers");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers.js");

//Login:
route.post("/login", loginUser);
// register
// route.post("/register", loginUser);

//Route
route.get("/:id", getUser);
route.get("/", getUsers);
route.post("/register", form_post_middlewares, createUser);
route.put("/:id", form_update_middlewares, updateUser);
route.put("/password/:id", form_password_middlewares, updateUser);
route.delete("/:id", deleteUser);

module.exports = route;
