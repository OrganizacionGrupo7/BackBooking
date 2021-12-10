const { model, Schema } = require("mongoose");

const ReservaSchema = new Schema({
    client: {
        type: String,
        required: true
    },
    numMesa: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    hora: {
        type: Date,
        default: Date.now()
    },
    cantClient: {
        type: Number,
        required: true
    }
});

module.exports = models("Reserva", ReservaSchema);
