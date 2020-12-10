const router = require('express').Router();
const { getAll, create } = require('../../models/comentario')


router.get('/', async (req, res) => {
    try {
        const rows = await getAll();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});


module.exports = router;