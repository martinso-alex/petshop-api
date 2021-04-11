const model = require('../database/models/fornecedores')

exports.listar = function (req, res) {
  model.listar()
    .then(lista => res.json(lista))
    .catch(error => res.status(400).json(error))
}
