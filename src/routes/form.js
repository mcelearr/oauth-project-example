const handler = (request, reply) => {
  reply.view('form', {
    title: 'ADD / WITHDRAW'
  });
}

module.exports = {
  method: 'GET',
  path: '/form',
  handler: handler
}
