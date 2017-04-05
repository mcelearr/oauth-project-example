const dbQueries = require('../db_queries.js');
const connPool = require('../../database/db_connection.js');

const handler = (request, reply) => {
  dbQueries.retrieveTransactions(connPool, (err, response) => {
    let data  = {
      title: 'Kitty I/O',
      rows: response.rows
    }
    reply.view('home', data)
  });
}

module.exports = {
  method: 'GET',
  path: '/',
  handler: handler
}
