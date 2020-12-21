const router = require('express').Router();
const { getAll, create, getById, deleteById, getByCorredorId } = require('../../models/publicado');
const { checkToken } = require('../middlewares');

router.get('/', async (req, res) => {
    try {
        const rows = await getAll();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});

router.get('/:corredorId', checkToken, async (req, res) => {
    try {
        const rows = await getByCorredorId(req.user.id);
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});

router.post('/', checkToken, async (req, res) => {
    console.log(req.body);
    try {
        const result = await create(req.body, req.user.id);
        if (result.affectedRows === 1) {
            const nuevoPublicado = await getById(result.insertId);
            res.json({
                mensaje: 'Se ha insertado correctamente',
                comentario: nuevoPublicado
            });
        } else {
            res.json({ error: 'No se ha podido insertar' })
        }
    } catch (error) {
        res.json({ error: error.message });
    }
})

module.exports = router;