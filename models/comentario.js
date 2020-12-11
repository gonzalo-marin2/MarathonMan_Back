const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from comentarios', (error, rows) => {
            if (error) reject(error);
            resolve(rows)
        });
    });
};


const create = ({ comentario }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO comentarios (comentario) values (?)', [comentario], (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
        )
    })
}

module.exports = {
    getAll, create
}