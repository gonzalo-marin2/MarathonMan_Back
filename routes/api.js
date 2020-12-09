const router = require('express').Router();

const apiEventosRouter = require('./api/eventos');
const apiCorredoresRouter = require('./api/corredores');

router.use('/eventos', apiEventosRouter);
router.use('/corredores', apiCorredoresRouter);


module.exports = router;