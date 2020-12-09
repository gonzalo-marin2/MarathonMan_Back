const router = require('express').Router();
const { getAll, create, getById, getByEvento } = require('../../models/corredor');
//const bcrypt = require('bcrypt');


router.get('/', async (req, res) => {
    try {
        const rows = await getAll();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});



/* router.post('/registro', async (req, res) => {
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
}); */

module.exports = router;