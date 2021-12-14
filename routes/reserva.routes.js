const route = require('express').Router();
const { listarReserva, crearReserva, eliminarReserva} = require ('../controllers/reserva.controller');

// /api/reserva
router.get('/:id', listarReserva);
router.post('/', crearReserva);
router.delete('/:id', eliminarReserva);

export default route;
