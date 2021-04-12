const model = require('../database/models/fornecedores')
const notFound = {"erro":"fornecedor não encontrado"}

exports.listar = (req, res) => {
  model.listar()
    .then(lista => res.json(lista))
    .catch(error => res.json(error))
}

exports.buscarPorId = (req, res) => {
  const id = req.params.id

  model.buscarPorId(id)
    .then(fornecedor => {
      if (fornecedor) res.json(fornecedor)
      else res.status(404).json(notFound)
    })
    .catch(error => res.json(error))
}

exports.criar = (req, res) => {
  const fornecedor = req.body

  model.criar(fornecedor)
    .then(fornecedor => res.status(201).json(fornecedor))
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
  const id = req.params.id
  const fornecedor = req.body

  model.atualizar(fornecedor, id)
    .then((fornecedor) => {
      if (fornecedor) res.json(fornecedor)
      else res.status(404).json(notFound)
    })
    .catch(error => res.status(400).json(error))
}
