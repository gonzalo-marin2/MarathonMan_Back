const router = require('express').Router();

const apiEventosRouter = require('./api/eventos');
const apiCorredoresRouter = require('./api/corredores');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/eventos', apiEventosRouter);
router.use('/corredores', apiCorredoresRouter);
router.use('/usuarios', apiUsuariosRouter);


module.exports = router;