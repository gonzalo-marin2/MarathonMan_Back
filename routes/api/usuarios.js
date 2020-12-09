const router = require('express').Router();
const { create, getByEmail } = require('../../models/usuario');
//const bcrypt = require('bcrypt');
/* const jwt = require('jsonwebtoken');
const dayjs = require('dayjs'); */


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