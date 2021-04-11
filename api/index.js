const express = require('express')
const config = require('config')
const app = express()

app.use(express.json())

app.listen(config.get('api.port'), () => console.log('api listening on port 3000...'))
