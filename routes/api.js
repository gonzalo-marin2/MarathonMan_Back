const router = require('express').Router();
const { checkToken } = require('./middlewares');

const apiEventosRouter = require('./api/eventos');
const apiCorredoresRouter = require('./api/corredores');
const apiComentariosRouter = require('./api/comentarios')

router.use('/eventos', apiEventosRouter);
router.use('/corredores', apiCorredoresRouter);
router.use('/comentarios', apiComentariosRouter);


module.exports = router;