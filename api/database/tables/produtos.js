const sequelize = require('sequelize')
const instance = require('..')

const columns = {
  titulo: {
    type: sequelize.STRING,
    allowNull: false
  },
  preco: {
    type: sequelize.DOUBLE,
    allowNull: false
  },
  estoque: {
    type: sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  fornecedor: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: require('./fornecedores'),
      key: 'id'
    }
  }
}

const options = {
  freezeTableName: true,
  tableName: 'produtos',
  timestamps: true,
  createdAt: 'data_criacao',
  updatedAt: 'data_atualizacao',
  version: 'versao'
}

module.exports = instance.define('produtos', columns, options)