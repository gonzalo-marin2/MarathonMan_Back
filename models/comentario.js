const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from comentarios', (error, rows) => {
            if (error) reject(error);
            resolve(rows)
        });
    });
};


const create = () => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO comentarios', (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
        )
    })
}