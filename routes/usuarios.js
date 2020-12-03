const router = require('express').Router();
const usuario = require('../models/usuario');
const {
    getAll, create, getById, deleteById, updateById
} = require('../models/usuario');


router.get('/', async (req, res) => {
    const rows = await getAll();
    res.render('usuarios', { usuarios: rows });
});




module.exports = router;