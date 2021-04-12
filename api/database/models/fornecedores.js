const table = require('../tables/fornecedores')

exports.listar = () => table.findAll()

exports.criar = (fornecedor) => table.create(fornecedor)

exports.buscarPorId = (id) => table.findByPk(id)

exports.deletar = (id) => table.destroy({where: {id: id}})

exports.atualizar = (fornecedor, id) =>
  table.update(fornecedor, {where: {id:id}})
    .then(() => table.findByPk(id))