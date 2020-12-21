const router = require('express').Router();
const { checkToken } = require('./middlewares');

const apiEventosRouter = require('./api/eventos');
const apiCorredoresRouter = require('./api/corredores');
const apiComentariosRouter = require('./api/comentarios');
const apiPublicadosRouter = require('./api/publicados');

router.use('/eventos', apiEventosRouter);
router.use('/corredores', apiCorredoresRouter);
router.use('/comentarios', apiComentariosRouter);
router.use('/publicados', apiPublicadosRouter);


module.exports = router;