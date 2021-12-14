const { model, Schema } = require("mongoose");

const ReservaSchema = new Schema({
    nombresClient: {
        type: String,
        required: true
    },
    numTelefono: {
        type: Number,
        required: true
    },
    cantClient: {
        type: Number,
        required: true
    },
    fechaReserva: {
        type: Date,
        default: Date.now()
    },
    horaReserva: {
        type: Date,
        default: Date.now()
    },
    numMesa: {
        type: Number,
        required: true
    },
    comentario: {
        type: String,
        required: false
    }
});

module.exports = model("Reserva", ReservaSchema);
