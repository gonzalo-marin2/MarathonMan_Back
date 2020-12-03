const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios', (error, rows) => {
            if (error) reject(error);
            resolve(rows)
        })
    })
}


const create = ({ nombre, apellidos, edad, email, telefono, nivel, zona }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO usuarios (nombre, apellidos, edad, email, telefono, nivel, zona) values (?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, edad, email, telefono, nivel, zona], (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
        )
    })
}


const getById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where id=?', [pUsuarioId], (error, rows) => {
            if (error) reject(error);
            if (rows.length === 0) resolve(null);
            resolve(rows[0]);
        })
    })
}


const deleteById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from clientes where id = ?', [pUsuarioId], (error, result) => {
            if (error) reject(error)
            resolve(result);
        })
    })
}


const updateById = (pUsuarioId, { nombre, apellidos, edad, email, telefono, nivel, zona }) => {
    return new Promise((resolve, reject) => {
        db.query('update usuarios set nombre = ?, apellidos = ?, edad = ?, email = ?, telefono = ?, nivel = ?, zona = ?', [nombre, apellidos, edad, email, telefono, nivel, zona, pUsuarioId]), (error, result) => {
            if (error) reject(error);
            resolve(result);
        }
    })
}


module.exports = {
    getAll, create, getById, deleteById, updateById
}