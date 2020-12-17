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
    return new Promise((resolve, reject) => {
        db.query('select * from eventos where nivel = ?', [pEventoNivel], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) resolve(null);
            resolve(rows);
        })
    })
}




//const getCorredoresByEvento = () =>


module.exports = { getAll, create, getById, deleteById, getByNivel }
