const {Database} = require('./index')

const createIndex = async () => {
    db = await Database()

    db.getIndexes()

    //db.dropIndex()
   // db.createIndex({ "nombre": "text", "descripcion": "text", "autor": "text"})
}

createIndex()