const table = require('../tables/fornecedores')

exports.listar = () => table.findAll()
