const express = require('express')
const router = express.Router()

const controller = require('../controllers/fornecedores')

router.get('/', controller.listar)

module.exports = router