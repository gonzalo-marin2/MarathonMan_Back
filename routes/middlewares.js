const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const { getById } = require('../models/corredor');

const checkToken = async (req, res, next) => {
    //si la variable es false, pasa
    if (!req.headers['authorization']) {
        return res.status(403).json({ error: 'Necesitas la cabecera Authorization' });
    }

    const token = req.headers['authorization'];
    const obj = jwt.decode(token, process.env.SECRET_KEY);
    if (!obj) {
        return res.status(403).json({ error: 'El token es incorrecto' });
    }

    if (dayjs().unix() > obj.caducidad) {
        return res.status(403).json({ error: 'El token está caducado' });
    }

    const usuario = await getById(obj.usuarioId);
    if (!usuario) {
        return res.status(403).json({ error: 'El usuario no existe' });
    }

    req.user = usuario;

    next();
}

module.exports = {
    checkToken
}