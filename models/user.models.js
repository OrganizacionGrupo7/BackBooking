const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    name:{type:String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true }
});

module.exports = model("User", UserSchema);