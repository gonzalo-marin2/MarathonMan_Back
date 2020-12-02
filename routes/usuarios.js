const router = require('express').Router();
const usuario = require('../models/usuario');
const {
    getAll, create
} = require('../models/usuario');

router.get('/', async (req, res) => {
    const rows = await getAll();
    console.log(rows);
})

module.exports = router;