const router = require('express').Router();
const { getAll, create, getById, deleteById } = require('../../models/comentario');


router.get('/', async (req, res) => {
    try {
        const rows = await getAll();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});


router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const result = await create(req.body);
        if (result.affectedRows === 1) {
            const nuevoComentario = await getById(result.insertId);
            res.json({
                mensaje: 'Se ha insertado correctamente',
                comentario: nuevoComentario
            });
        } else {
            res.json({ error: 'No se ha podido insertar' })
        }
    } catch (error) {
        res.json({ error: error.message });
    }
})

router.delete('/:comentarioId', async (req, res) => {
    try {
        const result = await deleteById(req.params.comentarioId);
        if (result.affectedRows === 1) {
            res.json({ mensaje: 'Petición realizada correctamente' });
        } else {
            res.json({ error: 'No se ha podido realizar la petición' });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
});


module.exports = router;