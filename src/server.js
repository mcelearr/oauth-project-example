const hapi = require('hapi');
//packegae of hapi for serving static file
const inert = require('inert');

const routes = require('./routes');

// create a new server and open a connection
const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: process.env.PORT || 9000
})

server.register(inert, (err) => {
  if (err) throw err;
  //link the routes to our server
  //each route have his handler
  server.route(routes);
})

module.exports = server;
