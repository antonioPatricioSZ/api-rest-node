// vai automaticamente ler o arquivo .env que a gente tem disponível
// vai expor todos os dados de .env em uma variavel global process.env
// para a pessoa que pegar nosso código nós usamos o .env.examplo para a pessoa saber quais nossas variáveis de ambiente, mas sem o valor da veriavel
//import 'dotenv/config'
import { Knex, knex as setupKnex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite',
  useNullAsDefault: true,
  connection: {
    filename: env.DATABASE_URL,
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
