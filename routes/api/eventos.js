const router = require('express').Router();
const { getAll, create, getById, deleteById, getByNivel } = require('../../models/evento');


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

router.delete('/:eventoId', async (req, res) => {
    try {
        const result = await deleteById(req.params.eventoId);
        if (result.affectedRows === 1) {
            res.json({ mensaje: 'Petición realizada correctamente' });
        } else {
            res.json({ error: 'No se ha podido realizar la petición' });
        }
    } catch (error) {
        res.json({ error: error.message });
    }

})


router.get('/:nivel', async (req, res) => {
    try {
        const rows = await getByNivel(req.params.nivel)
        res.json(rows)
    } catch (error) {
        res.json({ error: error.message })
    }
})

module.exports = router;