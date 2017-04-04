const hapi = require('hapi');

// create a new server and open a connection
const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: process.env.PORT || 9000
})

module.exports = server;
