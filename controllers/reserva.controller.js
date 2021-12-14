const Reserva = require("../models/reserva-model");
const reservasCtrl = {};

reservasCtrl.listarReserva = async(req, res) => {
    try {
        const reservas = await Reserva.find();
        res.json(reservas)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al traer la lista de reservas');
    }
}

reservasCtrl.crearReserva = async(req, res) => {
    try {
        let reserva;
        //Creamos una nueva Reserva
        reserva = new Reserva(req.body);
        await reserva.save();
        res.send(reserva);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error para crear una nueva reserva');
    }
}

reservasCtrl.eliminarReserva = async(req, res) => {
    try {
        let reserva = await Reserva.findById(req.params.id);

        if(!reserva){
            res.status(404).json({msg: 'No existe la reserva'});
        }
        
        await Reserva.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'La reserva fue eliminada con exito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error para eliminar la reserva');
    }
}

module.exports = reservasCtrl;