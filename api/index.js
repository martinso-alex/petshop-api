const express = require('express')
const config = require('config')
const port = config.get('api.port')
const app = express()

const fornecedoresRouter = require('./routes/fornecedores')

app.use(express.json())

app.use('/api/fornecedores', fornecedoresRouter)

app.listen(port, () => console.log(`api listening on port ${port}...`))
