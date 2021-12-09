const { model, Schema } = require("mongoose");

const ReservaSchema = new Schema({
    //aqui va el esquema de las reservas
});

module.exports = model("Reserva", ReservaSchema);