const fornecedoresTable = require('./tables/fornecedores')

fornecedoresTable
  .sync()
  .then(() => console.log('tabela criada com sucesso'))
  .catch(console.log())