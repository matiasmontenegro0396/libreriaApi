const express = require('express')
const { Config } = require('./src/config/index')
const debug = require('debug')('app:main');
const {BooksApi} = require('./src/Books/index')

require('dotenv')


const app = express()
const port = Config.port

// Middleware
app.use(express.json())



//Modules
BooksApi(app)



// Main
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
