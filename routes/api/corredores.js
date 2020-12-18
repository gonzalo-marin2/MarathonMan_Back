const router = require('express').Router();
const { getAll, create, getById, getByEmail, getByEvento } = require('../../models/corredor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const { checkToken } = require('../middlewares');


router.get('/', checkToken, async (req, res) => {

    console.log(req.user);

    try {
        const rows = await getAll();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});


router.get('/perfil', checkToken, async (req, res) => {
    try {
        const corredor = await getById(req.user.id);
        res.json(corredor);
    } catch (error) {
        res.json({ error: error.message })
    }
})


router.get('/:corredorId', checkToken, async (req, res) => {
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

/* router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await getByEmail(email);


        const iguales = bcrypt.compareSync(password, usuario.password);//nos devuelve un booleano
        if (!iguales) {
            return res.json({ error: 'Error en email y/o password' });
        }

        res.json({
            success: 'Correcto!',
            token: createToken(usuario)
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}); */

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {
        const usuario = await getByEmail(email);
        if (!usuario) {
            return res.json({ error: 'Error en email y/o password' });
        }

        //console.log(password, usuario.password);
        const iguales = bcrypt.compareSync(password, usuario.password);
        if (!iguales) {
            return res.json({ error: 'Error en email y/o password' });
        }

        res.json({
            success: 'Login correcto',
            token: createToken(usuario)
        });

    } catch (error) {
        res.json({ error: error.message });
    }

});

function createToken(pUsuario) {
    const obj = {
        usuarioId: pUsuario.id,
        caducidad: dayjs().add(120, 'minute').unix()
    }

    return jwt.sign(obj, process.env.SECRET_KEY);
}


module.exports = router;