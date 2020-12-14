const router = require('express').Router();
const { getAll, create, getById, getByEvento } = require('../../models/corredor');
const bcrypt = require('bcryptjs');


router.get('/', async (req, res) => {
    try {
        const rows = await getAll();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});

router.get('/:corredorId', async (req, res) => {
    try {
        const corredor = await getById(req.params.corredorId);
        res.json(corredor);
    } catch (error) {
        res.json({ error: error.message })
    }
});



router.post('/registro', async (req, res) => {
    console.log(res.body);
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const result = await create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ error: error.message })
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await getByEmail(email);
    } catch (error) {
        res.json({ error: error.message })
    }
});

module.exports = router;