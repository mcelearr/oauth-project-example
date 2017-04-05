const connPool = require('../../database/db_connection.js');
const dbQueries = require('../db_queries.js');

module.exports = {
  method: 'POST',
  path: '/transact',
  handler: (request, reply) => {
    dbQueries.postTransaction(connPool, request.payload, (err) => {
      if (err) {
        reply(`error when adding to database: ${err}`);
      }
      reply.redirect('/');
    });
  }
}
