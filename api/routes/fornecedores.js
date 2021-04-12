const express = require('express')
const router = express.Router()

const controller = require('../controllers/fornecedores')

router.get('/', controller.listar)

router.get('/:id', controller.buscarPorId)

router.post('/', controller.criar)

router.delete('/:id', controller.deletar)

router.patch('/:id', controller.atualizar)

const produtosRouter = require('./produtos')
router.use('/:idFornecedor/produtos', produtosRouter)

module.exports = router