const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from corredores', (error, rows) => {
            if (error) reject(error);
            resolve(rows)
        });
    });
};


const create = ({ nombre, apellidos, edad, email, password, telefono, nivel, zona }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO corredores (nombre, apellidos, edad, email, password, telefono, nivel, zona) values (?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, edad, email, password, telefono, nivel, zona], (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    })
}


const getById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from corredores where id=?', [pUsuarioId], (error, rows) => {
            if (error) reject(error);
            if (rows.length === 0) resolve(null);
            resolve(rows[0]);
        })
    })
}

const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select * from corredores where email = ?', [pEmail], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null); // El email debe ser único
            resolve(rows[0]);
        });
    });
}

module.exports = { getAll, create, getById, getByEmail }