const router = require('express').Router();
const { getAll, create, getById } = require('../../models/evento');


router.get('/', async (req, res) => {
    try {
        const rows = await getAll();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});



router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        if (result.affectedRows === 1) {
            const nuevoEvento = await getById(result.insertId);
            res.json({
                mensaje: 'Se ha insertado correctamente',
                evento: nuevoEvento
            });
        } else {
            res.json({ error: 'No se ha podido insertar' })
        }
    } catch (error) {
        res.json({ error: error.message });
    }
})


module.exports = router;