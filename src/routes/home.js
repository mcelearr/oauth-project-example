const dbQueries = require('../db_queries.js');
const connPool = require('../../database/db_connection.js');

const NUM_OF_RESULTS = 50;

const handler = (request, reply) => {
  dbQueries.retrieveTransactions(connPool, (err, response) => {
    let total = 0;
    response.rows.forEach(function(row) {
      total += row.transaction_value;
    });

    let data  = {
      title: 'Kitty I/O',
      total: total,
      rows: response.rows.slice(0, NUM_OF_RESULTS)
    }
    reply.view('home', data)
  });
}

module.exports = {
  method: 'GET',
  path: '/',
  handler: handler
}
