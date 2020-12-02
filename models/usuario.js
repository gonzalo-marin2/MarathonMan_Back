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


module.exports = {

}