const tables = {
  'fornecedores': require('./tables/fornecedores'),
  'produtos': require('./tables/produtos')
}

function createTables() {
  Object.keys(tables).forEach((i) => {
    tables[i]
      .sync()
      .then(() => console.log(`tabela ${i} criada com sucesso`))
      .catch(console.log())
  })
}

createTables()