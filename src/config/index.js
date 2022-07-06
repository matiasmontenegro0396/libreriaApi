require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoDbName: process.env.MONGO_DBNAME,
    libros: process.env.MONGO_COLLECTION_NAME
}