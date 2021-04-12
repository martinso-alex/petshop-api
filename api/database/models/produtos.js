const table = require('../tables/produtos')

class ProdutosModel {
  listar = (idFornecedor) => table.findAll({where: {fornecedor:idFornecedor}})

  buscarPorId = (id) => table.findByPk(id)

  criar = (produto) => table.create(produto)

  deletar = (id) => table.destroy({where: {id: id}})

  atualizar = (produto, id) =>
    table.update(produto, {where: {id:id}})
      .then(() => table.findByPk(id))

  somaEstoque = (id, soma) =>
    table.findByPk(id)
      .then((produto) => this.atualizar({estoque: produto.estoque + parseFloat(soma)}, id))

  reduzEstoque = (id, reduz) =>
    table.findByPk(id)
      .then((produto) => this.atualizar({estoque: produto.estoque - parseFloat(reduz)}, id))
}

module.exports = new ProdutosModel()