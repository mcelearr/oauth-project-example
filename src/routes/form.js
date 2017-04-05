const handler = (request, reply) => {
  reply.view('form');
}

module.exports = {
  method: 'GET',
  path: '/form',
  handler: handler
}
