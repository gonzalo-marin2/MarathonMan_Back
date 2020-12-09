const router = require('express').Router();
const { getAll } = require('../../models/usuario');

router.get('/', async (req, res) => {
    try {
        const rows = await getAll();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});

router.post('/registro', (req, res) => {

});

router.post('/login', (req, res) => {

});

module.exports = router;