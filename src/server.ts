import { app } from './app'
import { env } from './env'

// precisamos converter o nosso código para javascript para fazer o deploy

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server is running!')
  })

// o que o tsx faz e o processo de converter o código de ts para js e excutar o node no código js que foi gerado, de forma automatizada, sem gerar arquivos

// Os testes de Use Case verificam a lógica de negócio de um caso de uso específico da aplicação. Normalmente, são testes unitários focados em uma única funcionalidade, garantindo que a regra de negócio funcione conforme o esperado.

// Características:
// ✅ Testam apenas a lógica do caso de uso, sem dependências externas como banco de dados ou API.
// ✅ Usam mocks ou stubs para evitar interações reais com outros serviços.
// ✅ Rápidos e fáceis de rodar.

// Exemplo (Testando um caso de uso de criação de transação):
// ts
// Copiar
// Editar
// import { CreateTransactionUseCase } from './create-transaction-use-case'
// import { InMemoryTransactionsRepository } from '../../repositories/in-memory/in-memory-transactions-repository'

// test('Deve criar uma transação', async () => {
//   const transactionsRepository = new InMemoryTransactionsRepository()
//   const createTransaction = new CreateTransactionUseCase(transactionsRepository)

//   const transaction = await createTransaction.execute({
//     title: 'Compra de livro',
//     amount: 50,
//     type: 'expense',
//   })

//   expect(transaction).toHaveProperty('id')
//   expect(transaction.amount).toBe(50)
// })
// 🔹 Aqui, não testamos o banco de dados real, apenas a lógica do caso de uso.

// 2️⃣ Testes de Integração
// Os testes de integração verificam se diferentes partes do sistema funcionam corretamente juntas. Em geral, testam integrações reais com banco de dados, APIs externas e outros serviços.

// Características:
// ✅ Testam fluxos completos da aplicação.
// ✅ Não usam mocks para dependências externas (banco, API, etc.), pois o objetivo é validar a integração real.
// ✅ Podem ser mais lentos que testes de use case, pois envolvem interações reais.

// Exemplo (Testando um endpoint que cria uma transação):
// ts
// Copiar
// Editar
// import request from 'supertest'
// import { app } from '../server'
// import { knex } from '../database'

// beforeAll(async () => {
//   await knex.migrate.latest() // Garantir que o banco está atualizado
// })

// afterAll(async () => {
//   await knex.destroy() // Fechar conexão do banco
// })

// test('Deve criar uma transação na API', async () => {
//   const response = await request(app)
//     .post('/transactions')
//     .send({
//       title: 'Compra de livro',
//       amount: 50,
//       type: 'expense',
//     })

//   expect(response.status).toBe(201)
//   expect(response.body).toHaveProperty('id')
// })
// 🔹 Aqui, estamos testando o sistema completo, verificando se a API, o banco de dados e a regra de negócio funcionam juntos corretamente.

// 📌 Resumo: Quando usar cada um?
// Tipo de Teste	Objetivo	Dependências externas?	Exemplo
// Use Case	Testar uma regra de negócio isolada	❌ Não (usa mocks)	Criar uma transação sem acessar o banco
// Integração	Testar a comunicação entre partes do sistema	✅ Sim (banco de dados, API)	Criar uma transação e verificar no banco
// 🔹 Testes de Use Case são mais rápidos e focados na regra de negócio.
// 🔹 Testes de Integração garantem que tudo funciona junto corretamente.

// Se precisar de mais detalhes ou exemplos, só avisar! 🚀
