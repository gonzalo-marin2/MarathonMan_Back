const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from comentarios', (error, rows) => {
            if (error) reject(error);
            resolve(rows)
        });
    });
};


const create = (pObjeto) => {
    console.log(pObjeto);
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO comentarios (comentario) values (?)', [pObjeto.comentario], (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
        )
    })
}


const getById = (pComentarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from comentarios where id = ?', [pComentarioId], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) resolve(null);
            resolve(rows[0]);
        })
    })
}

const deleteById = (pComentarioId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from comentarios where id = ?', [pComentarioId], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
}

module.exports = { getAll, create, getById, deleteById }
