const dbQueries = require('../db_queries.js');
const connPool = require('../../database/db_connection.js');

const NUM_OF_RESULTS = 50;

const handler = (request, reply) => {
  if (request.auth.isAuthenticated) {
    return dbQueries.retrieveTransactions(connPool, (err, response) => {
      const total = response.rows.reduce((transactionSum, row) =>
        transactionSum + row.transaction_value, 0);

      const data = {
        title: 'Kitty I/O',
        total,
        rows: response.rows.slice(0, NUM_OF_RESULTS)
      };
      return reply.view('home', data);
    });
  }
  return reply.redirect('/login');
};

module.exports = {
  config: {
    auth: {
      mode: 'optional',
      strategy: 'jwt'
    }
  },
  method: 'GET',
  path: '/',
  handler
};
