dbQueries = {};

dbQueries.postTransaction = function(connPool, data, callback) {
  connPool.query(
    'INSERT INTO kitty (name, transaction_value) VALUES ($1, $2)',
    [data.name, data.amount],
    callback
  );
}

dbQueries.retrieveTransactions = function(connPool, callback) {
  connPool.query(
    'SELECT name, transaction_value FROM kitty',
    callback
  );
}

module.exports = dbQueries;
