const model = require('../database/models/produtos')
const notFound = {"erro":"produto não encontrado"}

exports.listar = (req, res) => {
  const idFornecedor = req.params.idFornecedor

  model.listar(idFornecedor)
    .then(lista => res.json(lista))
    .catch(error => res.json(error))
}

exports.buscarPorId = (req, res) => {
  const id = req.params.id

  model.buscarPorId(id)
    .then(produto => {
      if (produto) res.json(produto)
      else res.status(404).json(notFound)
    })
    .catch(error => res.json(error))
}

exports.criar = (req, res) => {
  const idFornecedor = req.params.idFornecedor
  const produto = req.body
  produto.fornecedor = idFornecedor

  model.criar(produto)
    .then(produto => res.status(201).json(produto))
    .catch(error => res.status(400).json(error))
}

exports.deletar = (req, res) => {
  const id = req.params.id

  model.deletar(id)
    .then((status) => {
      if (status) res.status(204).end()
      else res.status(404).json(notFound)
    })
    .catch(error => res.json(error))
}

exports.atualizar = (req, res) => {
  const idFornecedor = req.params.idFornecedor
  const produto = req.body
  produto.fornecedor = idFornecedor

  const id = req.params.id

  model.atualizar(produto, id)
    .then((produto) => {
      if (produto) res.json(produto)
      else res.status(404).json(notFound)
    })
    .catch(error => res.status(400).json(error))
}

exports.somaEstoque = (req, res) => {
  const soma = req.body.soma
  const id = req.params.id

  model.somaEstoque(id, soma)
    .then((produto) => {
      if (produto) res.json(produto)
      else res.status(404).json(notFound)
    })
    .catch(error => res.status(400).json(error))
}

exports.reduzEstoque = (req, res) => {
  const reduz = req.body.reduz
  const id = req.params.id

  model.reduzEstoque(id, reduz)
    .then((produto) => {
      if (produto) res.json(produto)
      else res.status(404).json(notFound)
    })
    .catch(error => res.status(400).json(error))
}