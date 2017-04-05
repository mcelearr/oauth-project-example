dbQueries = {};

dbQueries.postTransaction = function(connPool, data, callback) {
  connPool.query(
    'INSERT INTO kitty (name, transaction_value) VALUES ($1, $2)',
    [data.name, data.amount],
    callback
  );
}

module.exports = dbQueries;
