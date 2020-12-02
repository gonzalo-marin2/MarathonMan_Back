const router = require('express').Router();

const apiEventosRouter = require('./api/eventos');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/eventos', apiEventosRouter);
router.use('/usuarios', apiUsuariosRouter);


module.exports = router;