const hapi = require('hapi');
//package of hapi for serving static file
const inert = require('inert');

const routes = require('./routes');

// create a new server and open a connection
const server = new hapi.Server();

server.connection({
  // host: process.env.HOST ? process.env.HOST : 'localhost',
  port: process.env.PORT || 9000
})

server.register(inert, (err) => {
  if (err) throw err;
  //link the routes to our server
  //each route has a handler
  server.route(routes);
})

module.exports = server;
