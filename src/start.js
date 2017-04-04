const server = require('./server.js');

server.start((err) => {
  if (err) throw err;
  console.log(`server running at: ${server.info.uri}`);
});
