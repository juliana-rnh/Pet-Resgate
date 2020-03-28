const express = require ('express')
const cors = require('cors')
const routes = require ('./routes') // ./ referencia a mesma pasta do arquivo index

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
/*
 * Métodos HTTP:
 * GET: Busca informação no backend
 * POST: Cria informação no backend
 * PUT: Altera informação no backend
 * DELETE: Deleta informação no backend
 */

 /**
 * Parâmetros:
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Identifica recursos
 * Request Body: corpo da requisição, para criar ou alterar recursos
 */



app.listen(3333)