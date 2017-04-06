const dbQueries = require('../db_queries.js');
const connPool = require('../../database/db_connection.js');

const NUM_OF_RESULTS = 50;

const handler = (request, reply) => {
  dbQueries.retrieveTransactions(connPool, (err, response) => {
    // Sum the transactions in the kitty
    let total = response.rows.reduce(function(acc, row) {
      return acc + row.transaction_value;
    }, 0);

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
