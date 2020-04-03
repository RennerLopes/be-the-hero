const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors()); //modulo de segurança
app.use(express.json());/** express pega o corpo da requisição e converte o json em objeto javascript entendivel. Deve vir antes de todo o codigo  */
app.use(routes);


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma solicitação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 *Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota apôs "?" (Filtros, paginação)
 * Router Params: Parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Tipos de comunicação com o banco de dados:
 * 
 * Driver: SELECT * FROM USERS 
 * Query Builder: table(users).select('*').Where() - Pode mudar futuramente para outro banco de dado SQL pela compatibilidade 
 */


app.listen(3333);