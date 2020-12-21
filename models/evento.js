const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from eventos', (error, rows) => {
            if (error) reject(error);
            resolve(rows);
        })
    })
}


const create = ({ titulo, nivel, zona, fecha, hora }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into eventos (titulo, nivel, zona, fecha, hora) values (?, ?, ?, ?, ?)', [titulo, nivel, zona, fecha, hora], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}


const getById = (pEventoId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from eventos where id = ?', [pEventoId], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) resolve(null);
            resolve(rows[0]);
        })
    })
}

const deleteById = (pEventoId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from eventos where id = ?', [pEventoId], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
}


const getByNivel = (pEventoNivel) => {
    console.log(pEventoNivel);
    return new Promise((resolve, reject) => {
        db.query('select * from eventos where nivel = ?', [pEventoNivel], (error, rows) => {
            if (error) reject(error);
            if (rows.length === 0) resolve(null);
            resolve(rows);
        })
    })
}

const joinEvento = (pEventoId, pCorredorId) => {
    console.log(pEventoId, pCorredorId);
    return new Promise((resolve, reject) => {
        db.query('insert into tbi_eventos_corredores  (fk_evento, fk_corredor) values (?, ?)', [pEventoId, pCorredorId], (error, result) => {
            if (error) reject(error);
            resolve(result);
        })
    })
}

const joinRepetido = (pEventoId, pCorredorId) => {
    console.log(pEventoId, pCorredorId);
    return new Promise((resolve, reject) => {
        db.query('SELECT fk_corredor from tbi_eventos_corredores where fk_evento = ? and fk_corredor = ?', [pEventoId, pCorredorId], (error, result) => {
            if (error) reject(error);
            resolve(result);
        })
    })
}

const getCorredoresByEvento = (pEventoId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT COUNT(fk_corredor) as corredores FROM tbi_eventos_corredores WHERE fk_evento = ?', [pEventoId], (error, rows) => {
            if (error) reject(error);
            if (rows.length === 0) resolve(null);
            resolve(rows[0]);
        })
    })
}


module.exports = { getAll, create, getById, deleteById, getByNivel, joinEvento, getCorredoresByEvento, joinRepetido }
