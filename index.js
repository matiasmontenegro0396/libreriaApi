const express = require('express')
const { Config } = require('./src/config/index')
const debug = require('debug')('app:main');


require('dotenv')


const app = express()
const port = Config.port

// Middleware
app.use(express.json())



//Modules




// Main
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})