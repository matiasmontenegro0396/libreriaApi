const { MongoClient } = require("mongodb");
const debug = require("debug")("app:module-database");
const { Config } = require("../config/index");

// Para no crear conecciones extras, checkea si hay una y la reutiliza
var connection = null;

//La funcion permite conectarse a diferentes collecciones, aunque en este proyecto no es necesario
//ya que hay una sola colleccion, la de los libros
const Database = (collection= Config.libros) =>
  new Promise(async (resolve, reject) => {
    try {
        // Todo esto esta en la documentacion de mongodb
        // https://www.mongodb.com/docs/drivers/node/current/quick-start/
        if (!connection) {

            let client = new MongoClient(Config.mongoUri);
            connection = await client.connect()
            console.log('New connection to atlas');
        }
        // Primero me conecto a la base de datos
        const db = connection.db(Config.mongoDbName)
        // y aca a la colleccion
        resolve(db.collection(collection))
    } catch (error) {
        debug(error)
        reject(error)
    }
  });

module.exports = { Database };
