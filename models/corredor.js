const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from corredores', (error, rows) => {
            if (error) reject(error);
            resolve(rows)
        });
    });
};


/* const create = ({ nombre, apellidos, edad, email, telefono, nivel, zona }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO corredores (nombre, apellidos, edad, email, telefono, nivel, zona) values (?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, edad, email, telefono, nivel, zona], (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
        )
    })
} */


const getById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from corredores where id=?', [pUsuarioId], (error, rows) => {
            if (error) reject(error);
            if (rows.length === 0) resolve(null);
            resolve(rows[0]);
        })
    })
}


/* const deleteById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from corredores where id = ?', [pUsuarioId], (error, result) => {
            if (error) reject(error)
            resolve(result);
        })
    })
}


const updateById = (pUsuarioId, { nombre, apellidos, edad, email, telefono, nivel, zona }) => {
    return new Promise((resolve, reject) => {
        db.query('update corredores set nombre = ?, apellidos = ?, edad = ?, email = ?, telefono = ?, nivel = ?, zona = ?', [nombre, apellidos, edad, email, telefono, nivel, zona, pUsuarioId]), (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
    })
} */


const getByEvento

module.exports = {
    getAll, create, getById, deleteById, updateById
}