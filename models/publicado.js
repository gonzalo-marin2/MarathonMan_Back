const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from publicaciones', (error, rows) => {
            if (error) reject(error);
            resolve(rows)
        });
    });
};

const create = (pObjeto) => {
    console.log(pObjeto);
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO publicaciones (titulo, comentario) values (?, ?)', [pObjeto.titulo, pObjeto.comentario], (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
        )
    })
}


const getById = (pComentarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from publicaciones where id = ?', [pComentarioId], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) resolve(null);
            resolve(rows[0]);
        })
    })
}

const deleteById = (pComentarioId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from publicaciones where id = ?', [pComentarioId], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
}

module.exports = { getAll, create, getById, deleteById }