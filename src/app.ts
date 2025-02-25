import fastify from 'fastify'
import { TransactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

// estou usando o node porém usando o tsx para ler o arquivo ts

// migrate:rollback serve pra editar uma migration que ainda não foi pro time de desenvolvimento, dps posso fazer um migrate:latest novamente que ele envia novamente as atualizações

// usar antes das rotas pois vou usar nas rotas
app.register(cookie)

// se atentar a ordem
app.register(TransactionsRoutes, {
  prefix: 'transactions',
})
