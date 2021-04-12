const express = require('express')
const router = express.Router({mergeParams: true})

const controller = require('../controllers/produtos')

router.get('/', controller.listar)

router.get('/:id', controller.buscarPorId)

router.post('/', controller.criar)

router.delete('/:id', controller.deletar)

router.patch('/:id', controller.atualizar)

router.post('/:id/soma-estoque', controller.somaEstoque)

router.post('/:id/reduz-estoque', controller.reduzEstoque)

module.exports = router
