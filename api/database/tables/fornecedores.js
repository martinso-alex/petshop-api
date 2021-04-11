const sequelize = require('sequelize')
const instance = require('..')

const columns = {
  empresa: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false
  },
  categoria: {
    type: sequelize.ENUM('ração', 'brinquedos'),
    allowNull: false
  }
}

const options = {
  freezeTableName: true,
  tableName: 'fornecedores',
  timestamps: true,
  createdAt: 'data_criacao',
  updatedAt: 'data_atualizacao',
  version: 'versao'
}

module.exports = instance.define('fornecedores', columns, options)