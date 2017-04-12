const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const path = require('path');
const hapiAuthJwt2 = require('hapi-auth-jwt2');
const hbs = require('handlebars');
const fs = require('fs');

const routes = require('./routes');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 9000,
  tls: {
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.pem')
  }
});

server.register([inert, vision, hapiAuthJwt2], (err) => {
  if (err) throw err;

  const validate = (token, validateRequest, callback) => {
    if (!token) {
      return callback(null, false);
    }
    return callback(null, true);
  };

  server.auth.strategy('jwt', 'jwt',
    {
      key: process.env.SECRET,
      validateFunc: validate,
      verifyOptions: { algorithms: ['HS256'] }
    });

  server.route(routes);

  server.views({
    engines: {
      hbs
    },
    relativeTo: path.join(__dirname, 'handlebars'),
    layoutPath: './layouts',
    layout: 'default',
    path: './views',
    partialsPath: './partials',
    helpersPath: './helpers'
  });
});

module.exports = server;
