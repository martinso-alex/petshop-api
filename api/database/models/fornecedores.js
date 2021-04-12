const table = require('../tables/fornecedores')

class FornecedoresModel {
  listar = () => table.findAll()

  buscarPorId = (id) => table.findByPk(id)

  criar = (fornecedor) => table.create(fornecedor)

  deletar = (id) => table.destroy({where: {id: id}})

  atualizar = (fornecedor, id) =>
    table.update(fornecedor, {where: {id:id}})
      .then(() => table.findByPk(id))
}

module.exports = new FornecedoresModel()